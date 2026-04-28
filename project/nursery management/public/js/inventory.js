// inventory.js — Plant Inventory Management



function renderInventory() {
  const search   = (document.getElementById('plantSearch').value || '').toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  let plants     = Store.getPlants();

  if (search)   plants = plants.filter(p => p.name.toLowerCase().includes(search) || (p.desc||'').toLowerCase().includes(search));
  if (category) plants = plants.filter(p => p.category === category);

  const grid = document.getElementById('inventoryGrid');

  if (plants.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div class="icon">🌱</div>
      <h3>No plants found</h3>
      <p>Try adjusting filters or add a new plant.</p>
    </div>`;
    return;
  }

  grid.innerHTML = plants.map(p => {
    const qtyClass = p.qty <= 5 ? 'qty-low' : p.qty <= 20 ? 'qty-medium' : 'text-accent';
    return `
    <div class="plant-card">
      <div class="plant-name">${p.name}</div>
      <div class="plant-category">${p.category}</div>
      ${p.desc ? `<div class="text-muted" style="font-size:12px;margin-bottom:8px;">${p.desc}</div>` : ''}
      <div class="plant-qty ${qtyClass}">${p.qty}</div>
      <div class="plant-qty-label">units in stock</div>
      <div class="plant-price">${fmt(p.price)} per plant</div>
      <div class="plant-actions">
        <button class="btn btn-outline btn-sm" onclick="openEditPlantModal('${p.id}')">✏️ Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deletePlant('${p.id}')">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

function openAddPlantModal() {
  document.getElementById('editPlantId').value = '';
  document.getElementById('plantName').value    = '';
  document.getElementById('plantCategory').value = '';
  document.getElementById('plantQty').value     = '';
  document.getElementById('plantPrice').value   = '';
  document.getElementById('plantDesc').value    = '';
  document.getElementById('addPlantModal').classList.add('open');
}

function openEditPlantModal(id) {
  const p = Store.getPlantById(id);
  if (!p) return;
  document.getElementById('editPlantId').value    = id;
  document.getElementById('plantName').value      = p.name;
  document.getElementById('plantCategory').value  = p.category;
  document.getElementById('plantQty').value       = p.qty;
  document.getElementById('plantPrice').value     = p.price;
  document.getElementById('plantDesc').value      = p.desc || '';
  document.getElementById('addPlantModal').classList.add('open');
}

function closePlantModal() {
  document.getElementById('addPlantModal').classList.remove('open');
}

function savePlant() {
  const id       = document.getElementById('editPlantId').value;
  const name     = document.getElementById('plantName').value.trim();
  const category = document.getElementById('plantCategory').value;
  const qty      = parseInt(document.getElementById('plantQty').value);
  const price    = parseFloat(document.getElementById('plantPrice').value);
  const desc     = document.getElementById('plantDesc').value.trim();

  if (!name || !category || isNaN(qty) || isNaN(price)) {
    showToast('Please fill all required fields!', 'error'); return;
  }
  if (qty < 0 || price < 0) {
    showToast('Quantity and Price cannot be negative!', 'error'); return;
  }

  const data = { name, category, qty, price, desc };

  if (id) {
    Store.updatePlant(id, data);
    showToast(`"${name}" updated successfully!`);
  } else {
    Store.addPlant(data);
    showToast(`"${name}" added to inventory!`);
  }

  closePlantModal();
  renderInventory();
  refreshDashboard();
}

function deletePlant(id) {
  const p = Store.getPlantById(id);
  if (!p) return;
  if (!confirm(`Delete "${p.name}" from inventory?`)) return;
  Store.deletePlant(id);
  showToast(`"${p.name}" removed from inventory.`, 'info');
  renderInventory();
  refreshDashboard();
}
