// ui.js — UI utilities: toast, navigation, date

// ── Auth Guard ──
(function authGuard() {
  if (sessionStorage.getItem('nursery_logged_in') !== 'true') {
    window.location.href = '/';
  }
  const name = sessionStorage.getItem('nursery_user') || 'Admin';
  document.getElementById('adminName').textContent = name;
  document.getElementById('adminAvatar').textContent = name[0].toUpperCase();
})();

// ── Date ──
(function setDate() {
  const d = new Date();
  document.getElementById('currentDate').textContent =
    d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  document.getElementById('orderDate').value = d.toISOString().split('T')[0];
  document.getElementById('deliveryDate').value = d.toISOString().split('T')[0];
})();

// ── Toast ──
function showToast(msg, type = 'success') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  document.getElementById('toastContainer').appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

// ── Page navigation ──
const pageTitles = {
  'dashboard':     ['Dashboard',      'Overview of your nursery business'],
  'inventory':     ['Plant Inventory','Manage your plant stock'],
  'create-order':  ['Create Order',   'Book a new customer order'],
  'convert-sell':  ['Convert to Sell','Mark booked orders as sold'],
  'order-history': ['Order History',  'View all past and current orders'],
};

function switchPage(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('page-' + page).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');

  const [title, sub] = pageTitles[page];
  document.getElementById('pageTitle').textContent = title;
  document.getElementById('pageSubtitle').textContent = sub;

  // Refresh on switch
  if (page === 'dashboard')     refreshDashboard();
  if (page === 'inventory')     renderInventory();
  if (page === 'create-order')  populatePlantSelects();
  if (page === 'convert-sell')  renderPendingOrders();
  if (page === 'order-history') renderOrderHistory();
}

// ── Logout ──
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    sessionStorage.clear();
    window.location.href = '/';
  }
}

// ── Format currency ──
function fmt(n) { return '₹' + Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 }); }

// ── Format date ──
function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}
