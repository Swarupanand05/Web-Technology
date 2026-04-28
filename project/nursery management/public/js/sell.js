// sell.js — Convert to Sell + Order History

let currentSellOrderId = null;

// ─── PAYMENT MODE TOGGLE ───
function toggleSellTxnField() {
  const mode = document.querySelector('input[name="sellPayMode"]:checked');
  const wrap = document.getElementById('sellTxnWrap');
  if (wrap) wrap.style.display = (mode && mode.value === 'Online') ? 'block' : 'none';
}

// ─── PENDING ORDERS ───
function renderPendingOrders() {
  const search  = (document.getElementById('sellSearch').value || '').toLowerCase();
  let pending   = Store.getPendingOrders();
  if (search) {
    pending = pending.filter(o =>
      o.custName.toLowerCase().includes(search) ||
      o.custVillage.toLowerCase().includes(search) ||
      o.custPhone.includes(search)
    );
  }

  const badge = document.getElementById('pendingBadge');
  badge.textContent = Store.getPendingOrders().length;
  document.getElementById('pendingCount').textContent = `${pending.length} pending`;

  const tbody = document.getElementById('pendingOrdersBody');
  if (pending.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10"><div class="empty-state">
      <div class="icon">🎉</div><h3>No pending orders</h3>
      <p>All caught up! Create a new order first.</p>
    </div></td></tr>`;
    return;
  }

  tbody.innerHTML = pending.map((o, i) => {
    const plantsList = o.items.map(it => `${it.plantName} ×${it.qty}`).join(', ');
    return `<tr>
      <td><span class="text-muted">${i + 1}</span></td>
      <td class="fw-600">${o.custName}</td>
      <td>${o.custVillage}</td>
      <td>${o.custPhone}</td>
      <td style="max-width:180px;white-space:normal">${plantsList}</td>
      <td>${fmt(o.subtotal)}</td>
      <td class="text-success">${fmt(o.advance)}</td>
      <td class="text-accent">${fmt(o.remaining)}</td>
      <td>${fmtDate(o.orderDate)}</td>
      <td>
        <button class="btn btn-success btn-sm" onclick="openSellModal('${o.id}')">💰 Convert</button>
      </td>
    </tr>`;
  }).join('');
}

// ─── SELL MODAL ───
function openSellModal(orderId) {
  const o = Store.getOrderById(orderId);
  if (!o) return;
  currentSellOrderId = orderId;

  // Fill customer info
  document.getElementById('sc-name').textContent    = o.custName;
  document.getElementById('sc-phone').textContent   = o.custPhone;
  document.getElementById('sc-village').textContent = o.custVillage;
  document.getElementById('sc-date').textContent    = fmtDate(o.orderDate);
  document.getElementById('sc-plants').textContent  = o.items.map(it => `${it.plantName} ×${it.qty} @ ${fmt(it.price)}`).join(' | ');

  // Reset form fields
  document.getElementById('driverName').value       = '';
  document.getElementById('vehicleNo').value        = '';
  document.getElementById('transportCharges').value = '';
  document.getElementById('sellRemarks').value      = '';
  document.getElementById('sellTxnId').value        = '';
  document.getElementById('deliveryDate').value     = new Date().toISOString().split('T')[0];

  // Reset payment mode to Cash
  const cashRadio = document.querySelector('input[name="sellPayMode"][value="Cash"]');
  if (cashRadio) { cashRadio.checked = true; toggleSellTxnField(); }

  recalcSellBill();
  document.getElementById('sellModal').classList.add('open');
}

function closeSellModal() {
  document.getElementById('sellModal').classList.remove('open');
  currentSellOrderId = null;
}

function recalcSellBill() {
  if (!currentSellOrderId) return;
  const o         = Store.getOrderById(currentSellOrderId);
  if (!o) return;

  const transport = parseFloat(document.getElementById('transportCharges').value) || 0;
  const remaining = o.remaining + transport;
  const grand     = o.subtotal  + transport;

  document.getElementById('sb-total').textContent     = fmt(o.subtotal);
  document.getElementById('sb-advance').textContent   = fmt(o.advance);
  document.getElementById('sb-transport').textContent = fmt(transport);
  document.getElementById('sb-remaining').textContent = fmt(remaining);
  document.getElementById('sb-grand').textContent     = fmt(grand);
}

function confirmSell() {
  const driverName  = document.getElementById('driverName').value.trim();
  const vehicleNo   = document.getElementById('vehicleNo').value.trim();
  const transport   = parseFloat(document.getElementById('transportCharges').value) || 0;
  const delivDate   = document.getElementById('deliveryDate').value;
  const remarks     = document.getElementById('sellRemarks').value.trim();
  const payModeEl   = document.querySelector('input[name="sellPayMode"]:checked');
  const paymentMode = payModeEl ? payModeEl.value : 'Cash';
  const transactionId = (paymentMode === 'Online')
    ? (document.getElementById('sellTxnId').value.trim() || '')
    : '';

  if (!driverName || !vehicleNo) {
    showToast('Driver name and vehicle number are required!', 'error'); return;
  }

  const o     = Store.getOrderById(currentSellOrderId);
  const grand = o.subtotal + transport;

  Store.updateOrder(currentSellOrderId, {
    status:       'Sold',
    driverName,   vehicleNo,
    transportCharges: transport,
    deliveryDate: delivDate,
    sellRemarks:  remarks,
    paymentMode,  transactionId,
    grandTotal:   grand,
    finalRemaining: Math.max(0, o.remaining + transport),
    soldAt:       new Date().toISOString(),
  });

  showToast(`Sale confirmed for ${o.custName}! 🎉`);
  closeSellModal();
  renderPendingOrders();
  refreshDashboard();
}

// ─── ORDER HISTORY ───
function renderOrderHistory() {
  const search = (document.getElementById('historySearch').value || '').toLowerCase();
  const filter = document.getElementById('historyFilter').value;
  let orders   = Store.getOrders().slice().reverse();

  if (search) {
    orders = orders.filter(o =>
      o.custName.toLowerCase().includes(search) ||
      o.custVillage.toLowerCase().includes(search) ||
      o.custPhone.includes(search)
    );
  }
  if (filter) orders = orders.filter(o => o.status === filter);

  const tbody = document.getElementById('historyBody');
  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="13"><div class="empty-state">
      <div class="icon">📋</div><h3>No orders found</h3><p>Try adjusting your search filters.</p>
    </div></td></tr>`;
    return;
  }

  tbody.innerHTML = orders.map((o, i) => {
    const plants = o.items.map(it => `${it.plantName}\u00d7${it.qty}`).join(', ');
    const statusBadge = o.status === 'Sold'
      ? `<span class="badge badge-sold">Sold</span>`
      : `<span class="badge badge-pending">Pending</span>`;

    const payMode = o.paymentMode || '—';
    const payIcons = { 'Cash': '💵', 'Online': '📱', 'RTGS/NEFT': '🏦' };
    const payIcon  = payIcons[payMode] || '';
    const txnHint  = o.transactionId
      ? `<br><span class="text-muted" style="font-size:10px;">Ref: ${o.transactionId}</span>`
      : '';
    const payCell = `${payIcon} ${payMode}${txnHint}`;

    return `<tr>
      <td class="text-muted">${i + 1}</td>
      <td class="fw-600">${o.custName}</td>
      <td>${o.custVillage}</td>
      <td>${o.custPhone}</td>
      <td style="max-width:160px;white-space:normal;font-size:12px">${plants}</td>
      <td>${fmt(o.subtotal)}</td>
      <td class="text-success">${fmt(o.advance)}</td>
      <td>${o.transportCharges ? fmt(o.transportCharges) : '<span class="text-muted">—</span>'}</td>
      <td class="fw-600">${o.grandTotal ? fmt(o.grandTotal) : fmt(o.subtotal)}</td>
      <td>${o.driverName || '<span class="text-muted">—</span>'}</td>
      <td>${o.vehicleNo  || '<span class="text-muted">—</span>'}</td>
      <td style="font-size:12px;white-space:nowrap;">${payCell}</td>
      <td>${statusBadge}</td>
      <td style="font-size:12px">${fmtDate(o.soldAt || o.orderDate)}</td>
      <td>
        <div class="action-btns">
          <button class="btn btn-info btn-sm" title="Receipt" onclick="openReceipt('${o.id}')">🧾</button>
          <button class="btn btn-warning btn-sm" title="Edit" onclick="openEditOrderModal('${o.id}')">✏️</button>
          <button class="btn btn-danger btn-sm" title="Delete" onclick="deleteOrder('${o.id}')">🗑️</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

// ─── EXPORT CSV ───
function exportHistory() {
  const orders = Store.getOrders();
  if (orders.length === 0) { showToast('No orders to export!', 'info'); return; }

  const header = ['ID','Customer','Village','Phone','Plants','Subtotal','Advance','Transport','GrandTotal','Driver','Vehicle','PaymentMode','TransactionID','Status','Date'];
  const rows   = orders.map(o => [
    o.id, o.custName, o.custVillage, o.custPhone,
    o.items.map(it => `${it.plantName}x${it.qty}`).join(' | '),
    o.subtotal, o.advance, o.transportCharges || 0,
    o.grandTotal || o.subtotal,
    o.driverName || '', o.vehicleNo || '',
    o.paymentMode || '', o.transactionId || '',
    o.status, fmtDate(o.soldAt || o.orderDate)
  ]);

  const csv  = [header, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `nursery_orders_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Orders exported to CSV!');
}

// ─── DASHBOARD REFRESH ───
function refreshDashboard() {
  const plants  = Store.getPlants();
  const orders  = Store.getOrders();
  const pending = Store.getPendingOrders();
  const sold    = Store.getSoldOrders();

  const totalStock   = plants.reduce((s, p) => s + p.qty, 0);
  const totalRevenue = sold.reduce((s, o) => s + (o.grandTotal || o.subtotal), 0);

  document.getElementById('stat-plants').textContent  = plants.length;
  document.getElementById('stat-stock').textContent   = totalStock;
  document.getElementById('stat-pending').textContent = pending.length;
  document.getElementById('stat-sold').textContent    = sold.length;
  document.getElementById('stat-revenue').textContent = fmt(totalRevenue);
  document.getElementById('pendingBadge').textContent = pending.length;

  // Recent orders (last 5)
  const recent = orders.slice(-5).reverse();
  const tbody  = document.getElementById('recentOrdersBody');
  if (recent.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty-state">
      <div class="icon">📋</div><h3>No orders yet</h3><p>Create your first order to see it here.</p>
    </div></td></tr>`;
    return;
  }
  tbody.innerHTML = recent.map((o, i) => {
    const badge = o.status === 'Sold'
      ? `<span class="badge badge-sold">Sold</span>`
      : `<span class="badge badge-pending">Pending</span>`;
    return `<tr>
      <td class="text-muted">${i + 1}</td>
      <td class="fw-600">${o.custName}</td>
      <td>${o.custVillage}</td>
      <td>${o.items.map(it => it.plantName).join(', ')}</td>
      <td>${o.items.reduce((s,it)=>s+it.qty,0)}</td>
      <td>${fmt(o.grandTotal || o.subtotal)}</td>
      <td>${badge}</td>
      <td style="font-size:12px">${fmtDate(o.orderDate)}</td>
    </tr>`;
  }).join('');
}

// ─── INIT ───
window.addEventListener('DOMContentLoaded', () => {
  refreshDashboard();
  populatePlantSelects();
  loadNurseryProfile();
  applySidebarBranding();
});

// ══════════════════════════════════════════
// ─── RECEIPT ───
// ══════════════════════════════════════════
function getNurseryProfile() {
  return JSON.parse(localStorage.getItem('nursery_profile') || '{}');
}

function openReceipt(orderId) {
  const o = Store.getOrderById(orderId);
  if (!o) return;
  const np = getNurseryProfile();

  const nurseryName    = np.name    || 'NurseryPro';
  const nurseryPhone   = np.phone   || '';
  const nurseryAddress = np.address || '';
  const nurseryTagline = np.tagline || 'Growing happiness, one plant at a time';

  const payMode  = o.paymentMode  || 'Cash';
  const payIcons = { 'Cash': '💵', 'Online': '📱', 'RTGS/NEFT': '🏦' };
  const transport    = o.transportCharges || 0;
  const grandTotal   = o.grandTotal   || o.subtotal;
  const finalRemain  = o.finalRemaining != null ? o.finalRemaining : o.remaining;

  const itemRows = o.items.map((it, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${it.plantName}</td>
      <td style="text-align:center;">${it.qty}</td>
      <td style="text-align:right;">${fmt(it.price)}</td>
      <td style="text-align:right;font-weight:600;">${fmt(it.lineTotal)}</td>
    </tr>`).join('');

  const html = `
  <div class="receipt-wrap">

    <!-- HEADER -->
    <div class="receipt-header">
      <div class="receipt-logo">
        ${(np.logo || '/images/logo.png')
          ? `<img src="${np.logo || '/images/logo.png'}" alt="Logo" class="receipt-logo-img" onerror="this.style.display='none';this.nextElementSibling.style.display='inline';" /><span class="receipt-logo-emoji" style="display:none;">🌿</span>`
          : `<span class="receipt-logo-emoji">🌿</span>`
        }
      </div>
      <div class="receipt-nursery-info">
        <h1 class="receipt-nursery-name">${nurseryName}</h1>
        ${nurseryPhone   ? `<p class="receipt-nursery-sub">📞 ${nurseryPhone}</p>` : ''}
        ${nurseryAddress ? `<p class="receipt-nursery-sub">📍 ${nurseryAddress}</p>` : ''}
        <p class="receipt-nursery-tagline">${nurseryTagline}</p>
      </div>
    </div>

    <div class="receipt-divider"></div>

    <!-- RECEIPT LABEL + META -->
    <div class="receipt-meta-row">
      <div>
        <p class="receipt-label">SALES RECEIPT</p>
        <p class="receipt-order-id">Order ID: <strong>${o.id}</strong></p>
      </div>
      <div style="text-align:right;">
        <p class="receipt-date-label">Order Date</p>
        <p class="receipt-date-val">${fmtDate(o.orderDate)}</p>
        ${o.deliveryDate ? `<p class="receipt-date-label" style="margin-top:4px;">Delivery Date</p><p class="receipt-date-val">${fmtDate(o.deliveryDate)}</p>` : ''}
      </div>
    </div>

    <div class="receipt-divider"></div>

    <!-- CUSTOMER INFO -->
    <div class="receipt-section-title">Customer Details</div>
    <div class="receipt-customer-grid">
      <div class="receipt-info-item">
        <span class="receipt-info-label">Name</span>
        <span class="receipt-info-val">${o.custName}</span>
      </div>
      <div class="receipt-info-item">
        <span class="receipt-info-label">Phone</span>
        <span class="receipt-info-val">${o.custPhone}</span>
      </div>
      <div class="receipt-info-item">
        <span class="receipt-info-label">Village / Area</span>
        <span class="receipt-info-val">${o.custVillage}</span>
      </div>
      ${o.driverName ? `<div class="receipt-info-item">
        <span class="receipt-info-label">Driver</span>
        <span class="receipt-info-val">${o.driverName}</span>
      </div>` : ''}
      ${o.vehicleNo ? `<div class="receipt-info-item">
        <span class="receipt-info-label">Vehicle No.</span>
        <span class="receipt-info-val">${o.vehicleNo}</span>
      </div>` : ''}
      <div class="receipt-info-item">
        <span class="receipt-info-label">Payment Mode</span>
        <span class="receipt-info-val">${payIcons[payMode] || ''} ${payMode}${o.transactionId ? ` — Ref: ${o.transactionId}` : ''}</span>
      </div>
    </div>

    <div class="receipt-divider"></div>

    <!-- ITEMS TABLE -->
    <div class="receipt-section-title">Order Items</div>
    <table class="receipt-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Plant Name</th>
          <th style="text-align:center;">Qty</th>
          <th style="text-align:right;">Unit Price</th>
          <th style="text-align:right;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${itemRows}
      </tbody>
    </table>

    <!-- BILL SUMMARY -->
    <div class="receipt-bill">
      <div class="receipt-bill-row">
        <span>Subtotal</span><span>${fmt(o.subtotal)}</span>
      </div>
      <div class="receipt-bill-row">
        <span>Advance Paid</span><span class="receipt-green">- ${fmt(o.advance)}</span>
      </div>
      ${transport ? `<div class="receipt-bill-row">
        <span>Transport Charges</span><span>${fmt(transport)}</span>
      </div>` : ''}
      <div class="receipt-bill-row receipt-bill-total">
        <span>Remaining to Collect</span><span>${fmt(finalRemain)}</span>
      </div>
      <div class="receipt-bill-row receipt-bill-grand">
        <span>Grand Total</span><span>${fmt(grandTotal)}</span>
      </div>
    </div>

    ${o.notes || o.sellRemarks ? `
    <div class="receipt-divider"></div>
    <div class="receipt-section-title">Remarks</div>
    <p class="receipt-remarks">${o.notes || o.sellRemarks}</p>` : ''}

    <!-- FOOTER -->
    <div class="receipt-divider"></div>
    <div class="receipt-footer">
      <p>Thank you for your purchase! 🌱</p>
      <p style="font-size:11px;margin-top:4px;">This is a computer-generated receipt.</p>
    </div>

  </div>`;

  document.getElementById('receiptBody').innerHTML = html;
  document.getElementById('receiptModal').classList.add('open');
}

function closeReceiptModal() {
  document.getElementById('receiptModal').classList.remove('open');
}

function printReceipt() {
  const content = document.getElementById('receiptBody').innerHTML;
  const win = window.open('', '_blank', 'width=750,height=900');
  win.document.write(`
    <!DOCTYPE html><html><head>
    <title>Receipt — NurseryPro</title>
    <link rel="stylesheet" href="/css/style.css" />
    <style>
      body { background:#fff; color:#111; font-family:'Inter',sans-serif; padding:20px; }
      .receipt-wrap { max-width:620px; margin:0 auto; }
      @media print { body { padding:0; } }
    </style>
    </head><body>${content}</body></html>`);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); win.close(); }, 400);
}

// ══════════════════════════════════════════
// ─── EDIT ORDER ───
// ══════════════════════════════════════════
function toggleEoTxnField() {
  const mode = document.querySelector('input[name="eoPayMode"]:checked');
  const wrap = document.getElementById('eoTxnWrap');
  if (wrap) wrap.style.display = (mode && mode.value === 'Online') ? 'block' : 'none';
}

function openEditOrderModal(orderId) {
  const o = Store.getOrderById(orderId);
  if (!o) return;

  document.getElementById('editOrderId').value = orderId;
  document.getElementById('eo-name').value     = o.custName;
  document.getElementById('eo-phone').value    = o.custPhone;
  document.getElementById('eo-village').value  = o.custVillage;
  document.getElementById('eo-date').value     = o.orderDate;
  document.getElementById('eo-notes').value    = o.notes || '';
  document.getElementById('eo-advance').value  = o.advance || 0;
  document.getElementById('eo-txnId').value    = o.transactionId || '';

  // Set payment mode radio
  const pm = o.paymentMode || 'Cash';
  const radio = document.querySelector(`input[name="eoPayMode"][value="${pm}"]`);
  if (radio) { radio.checked = true; }
  toggleEoTxnField();

  document.getElementById('editOrderModal').classList.add('open');
}

function closeEditOrderModal() {
  document.getElementById('editOrderModal').classList.remove('open');
}

function saveEditedOrder() {
  const id      = document.getElementById('editOrderId').value;
  const name    = document.getElementById('eo-name').value.trim();
  const phone   = document.getElementById('eo-phone').value.trim();
  const village = document.getElementById('eo-village').value.trim();
  const date    = document.getElementById('eo-date').value;
  const notes   = document.getElementById('eo-notes').value.trim();
  const advance = parseFloat(document.getElementById('eo-advance').value) || 0;
  const payModeEl = document.querySelector('input[name="eoPayMode"]:checked');
  const paymentMode  = payModeEl ? payModeEl.value : 'Cash';
  const transactionId = paymentMode === 'Online'
    ? (document.getElementById('eo-txnId').value.trim() || '') : '';

  if (!name || !phone || !village) {
    showToast('Name, phone and village are required!', 'error'); return;
  }

  const o = Store.getOrderById(id);
  const remaining = Math.max(0, o.subtotal - advance);

  Store.updateOrder(id, {
    custName: name, custPhone: phone, custVillage: village,
    orderDate: date, notes, advance, remaining, paymentMode, transactionId,
  });

  showToast('Order updated successfully!');
  closeEditOrderModal();
  renderOrderHistory();
  renderPendingOrders();
  refreshDashboard();
}

// ══════════════════════════════════════════
// ─── DELETE ORDER ───
// ══════════════════════════════════════════
function deleteOrder(orderId) {
  const o = Store.getOrderById(orderId);
  if (!o) return;
  if (!confirm(`Delete order for "${o.custName}"?\nThis action cannot be undone.`)) return;

  // Restore stock if pending (sold orders don't restore stock to avoid double counting)
  if (o.status === 'Pending') {
    o.items.forEach(it => {
      const plant = Store.getPlantById(it.plantId);
      if (plant) Store.updatePlant(it.plantId, { qty: plant.qty + it.qty });
    });
  }

  const orders = Store.getOrders().filter(x => x.id !== orderId);
  Store.saveOrders(orders);

  showToast(`Order deleted.`, 'info');
  renderOrderHistory();
  renderPendingOrders();
  refreshDashboard();
}

// ══════════════════════════════════════════
// ─── NURSERY PROFILE ───
// ══════════════════════════════════════════

// Pre-seed defaults if first time
const DEFAULT_NURSERY = {
  name:    'बजबळकर रोपवाटिका',
  phone:   '',
  address: '',
  tagline: 'काळ्या आईच्या आरोग्यासाठी हरित क्रांतीच्या दिशेने',
  logo:    '',
};

function getNurseryProfile() {
  const saved = JSON.parse(localStorage.getItem('nursery_profile') || 'null');
  if (!saved) {
    // First time — seed defaults
    localStorage.setItem('nursery_profile', JSON.stringify(DEFAULT_NURSERY));
    return { ...DEFAULT_NURSERY };
  }
  return saved;
}

function applySidebarBranding() {
  const np = getNurseryProfile();
  const nameEl  = document.getElementById('sidebarNurseryName');
  const imgEl   = document.getElementById('sidebarLogoImg');
  const emojiEl = document.getElementById('sidebarLogoEmoji');

  if (nameEl) nameEl.textContent = np.name || 'बजबळकर रोपवाटिका';

  // Use base64 logo from profile, or fall back to /images/logo.png on server
  const logoSrc = np.logo || '/images/logo.png';
  if (imgEl) {
    imgEl.src = logoSrc;
    imgEl.style.display = 'block';
    imgEl.onerror = function() {
      this.style.display = 'none';
      if (emojiEl) emojiEl.style.display = '';
    };
  }
  if (emojiEl) emojiEl.style.display = 'none';
}

function loadNurseryProfile() {
  const np = getNurseryProfile();
  const nameEl    = document.getElementById('np-name');
  const phoneEl   = document.getElementById('np-phone');
  const addrEl    = document.getElementById('np-address');
  const tagEl     = document.getElementById('np-tagline');
  const preview   = document.getElementById('np-logo-preview');
  const placeholder = document.getElementById('np-logo-placeholder');

  if (nameEl)  nameEl.value  = np.name    || '';
  if (phoneEl) phoneEl.value = np.phone   || '';
  if (addrEl)  addrEl.value  = np.address || '';
  if (tagEl)   tagEl.value   = np.tagline || '';

  if (preview && placeholder) {
    if (np.logo) {
      preview.src = np.logo;
      preview.style.display = 'block';
      placeholder.style.display = 'none';
    } else {
      preview.style.display = 'none';
      placeholder.style.display = 'flex';
    }
  }
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    const preview     = document.getElementById('np-logo-preview');
    const placeholder = document.getElementById('np-logo-placeholder');
    preview.src = base64;
    preview.style.display = 'block';
    placeholder.style.display = 'none';
    // Temporarily store pending logo
    window._pendingLogo = base64;
  };
  reader.readAsDataURL(file);
}

function clearLogoUpload() {
  const preview     = document.getElementById('np-logo-preview');
  const placeholder = document.getElementById('np-logo-placeholder');
  const fileInput   = document.getElementById('np-logo-file');
  if (preview)     { preview.src = ''; preview.style.display = 'none'; }
  if (placeholder) placeholder.style.display = 'flex';
  if (fileInput)   fileInput.value = '';
  window._pendingLogo = null;
}

function openNurseryProfile() {
  window._pendingLogo = undefined; // reset pending
  loadNurseryProfile();
  document.getElementById('nurseryProfileModal').classList.add('open');
}

function closeNurseryProfile() {
  document.getElementById('nurseryProfileModal').classList.remove('open');
  window._pendingLogo = undefined;
}

function saveNurseryProfile() {
  const name    = document.getElementById('np-name').value.trim();
  const phone   = document.getElementById('np-phone').value.trim();
  const address = document.getElementById('np-address').value.trim();
  const tagline = document.getElementById('np-tagline').value.trim();

  if (!name) {
    showToast('Nursery name is required!', 'error'); return;
  }

  const existing = getNurseryProfile();
  // Use newly uploaded logo, or cleared (null), or keep existing
  let logo = existing.logo || '';
  if (window._pendingLogo === null) {
    logo = ''; // user cleared it
  } else if (window._pendingLogo) {
    logo = window._pendingLogo; // new upload
  }

  localStorage.setItem('nursery_profile', JSON.stringify({ name, phone, address, tagline, logo }));
  showToast('Nursery profile saved! ✅');
  closeNurseryProfile();
  applySidebarBranding();
}
