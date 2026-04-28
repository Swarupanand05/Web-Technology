// orders.js — Create Order + Bill Calculation

// Populate plant selects in order form
function populatePlantSelects() {
  const plants = Store.getPlants();
  const opts   = `<option value="">-- Select Plant --</option>` +
    plants.map(p => `<option value="${p.id}" data-price="${p.price}">${p.name} (Stock: ${p.qty})</option>`).join('');

  document.querySelectorAll('.plant-select').forEach(sel => {
    const curr = sel.value;
    sel.innerHTML = opts;
    if (curr) sel.value = curr;
  });
}

// Add another plant row
function addOrderItem() {
  const container = document.getElementById('orderItems');
  const idx       = container.querySelectorAll('.order-item').length;
  const div       = document.createElement('div');
  div.className   = 'order-item';
  div.dataset.idx = idx;
  div.innerHTML   = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
      <span class="text-muted" style="font-size:12px;">Item ${idx + 1}</span>
      <button type="button" class="btn btn-danger btn-sm" onclick="removeOrderItem(this)" style="margin-left:auto;">✕ Remove</button>
    </div>
    <div class="form-row cols-3">
      <div class="form-group">
        <label>Plant Name *</label>
        <select class="plant-select" onchange="recalcOrder()">
          <option value="">-- Select Plant --</option>
        </select>
      </div>
      <div class="form-group">
        <label>Quantity *</label>
        <input type="number" class="qty-input" min="1" placeholder="0" oninput="recalcOrder()" />
      </div>
      <div class="form-group">
        <label>Unit Price (₹)</label>
        <input type="number" class="price-input" min="0" placeholder="Auto-filled" oninput="recalcOrder()" />
      </div>
    </div>`;
  container.appendChild(div);
  populatePlantSelects();
}

function removeOrderItem(btn) {
  btn.closest('.order-item').remove();
  recalcOrder();
}

// Auto-fill price when plant is selected
document.addEventListener('change', function (e) {
  if (e.target.classList.contains('plant-select')) {
    const opt   = e.target.selectedOptions[0];
    const price = opt ? opt.dataset.price : '';
    const row   = e.target.closest('.order-item');
    if (row && price) row.querySelector('.price-input').value = price;
    recalcOrder();
  }
});

// Calculate order totals
function recalcOrder() {
  let subtotal = 0;
  document.querySelectorAll('.order-item').forEach(item => {
    const qty   = parseFloat(item.querySelector('.qty-input').value)   || 0;
    const price = parseFloat(item.querySelector('.price-input').value) || 0;
    subtotal += qty * price;
  });
  const advance   = parseFloat(document.getElementById('advancePaid').value) || 0;
  const remaining = Math.max(0, subtotal - advance);

  document.getElementById('bill-subtotal').textContent  = fmt(subtotal);
  document.getElementById('bill-advance').textContent   = fmt(advance);
  document.getElementById('bill-remaining').textContent = fmt(remaining);
}

// Toggle transaction ID field for order form
function toggleOrderTxnField() {
  const mode = document.querySelector('input[name="orderPayMode"]:checked');
  const wrap = document.getElementById('orderTxnWrap');
  if (wrap) wrap.style.display = (mode && mode.value === 'Online') ? 'block' : 'none';
}

// Reset order form
function resetOrderForm() {
  document.getElementById('custName').value    = '';
  document.getElementById('custPhone').value   = '';
  document.getElementById('custVillage').value = '';
  document.getElementById('orderNotes').value  = '';
  document.getElementById('advancePaid').value = '';
  document.getElementById('orderTxnId').value  = '';
  document.getElementById('orderDate').value   = new Date().toISOString().split('T')[0];

  // Reset payment mode to Cash
  const cashRadio = document.querySelector('input[name="orderPayMode"][value="Cash"]');
  if (cashRadio) { cashRadio.checked = true; toggleOrderTxnField(); }

  // Reset items to one row
  const container = document.getElementById('orderItems');
  container.innerHTML = `
    <div class="order-item" data-idx="0">
      <div class="form-row cols-3">
        <div class="form-group">
          <label>Plant Name *</label>
          <select class="plant-select" onchange="recalcOrder()">
            <option value="">-- Select Plant --</option>
          </select>
        </div>
        <div class="form-group">
          <label>Quantity *</label>
          <input type="number" class="qty-input" min="1" placeholder="0" oninput="recalcOrder()" />
        </div>
        <div class="form-group">
          <label>Unit Price (₹)</label>
          <input type="number" class="price-input" min="0" placeholder="Auto-filled" oninput="recalcOrder()" />
        </div>
      </div>
    </div>`;
  populatePlantSelects();
  recalcOrder();
}

// Save Order
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const custName    = document.getElementById('custName').value.trim();
  const custPhone   = document.getElementById('custPhone').value.trim();
  const custVillage = document.getElementById('custVillage').value.trim();
  const orderDate   = document.getElementById('orderDate').value;
  const notes       = document.getElementById('orderNotes').value.trim();
  const advance     = parseFloat(document.getElementById('advancePaid').value) || 0;
  const payModeEl   = document.querySelector('input[name="orderPayMode"]:checked');
  const paymentMode = payModeEl ? payModeEl.value : 'Cash';
  const transactionId = (paymentMode === 'Online')
    ? (document.getElementById('orderTxnId').value.trim() || '')
    : '';

  if (!custName || !custPhone || !custVillage || !orderDate) {
    showToast('Please fill all required customer fields!', 'error'); return;
  }

  // Collect items
  const items = [];
  let subtotal = 0;
  let valid    = true;

  document.querySelectorAll('.order-item').forEach(item => {
    const plantId = item.querySelector('.plant-select').value;
    const qty     = parseInt(item.querySelector('.qty-input').value);
    const price   = parseFloat(item.querySelector('.price-input').value);

    if (!plantId || !qty || !price) { valid = false; return; }

    const plant = Store.getPlantById(plantId);
    if (!plant) return;

    // Check stock
    if (qty > plant.qty) {
      showToast(`Insufficient stock for "${plant.name}". Available: ${plant.qty}`, 'error');
      valid = false; return;
    }

    items.push({ plantId, plantName: plant.name, qty, price, lineTotal: qty * price });
    subtotal += qty * price;
  });

  if (!valid)          { return; }
  if (items.length === 0) { showToast('Add at least one plant item!', 'error'); return; }

  // Deduct from stock
  items.forEach(it => {
    const plant = Store.getPlantById(it.plantId);
    Store.updatePlant(it.plantId, { qty: plant.qty - it.qty });
  });

  const order = Store.addOrder({
    custName, custPhone, custVillage, orderDate, notes,
    items, subtotal, advance, remaining: Math.max(0, subtotal - advance),
    paymentMode, transactionId,
  });

  showToast(`Order #${order.id} created for ${custName}!`);
  resetOrderForm();
  refreshDashboard();
});
