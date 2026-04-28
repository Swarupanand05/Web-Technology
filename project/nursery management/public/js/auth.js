// auth.js — Admin Login Logic

const DEFAULT_ADMIN = { username: 'admin', password: 'Admin@123', name: 'Admin' };

// Always sync the admin credentials from source-of-truth (fixes stale localStorage after password changes)
(function init() {
  localStorage.setItem('nursery_admin', JSON.stringify(DEFAULT_ADMIN));
  // If already logged in, go to dashboard
  if (sessionStorage.getItem('nursery_logged_in') === 'true') {
    window.location.href = '/dashboard';
  }
})();

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errEl = document.getElementById('loginError');
  const btn = document.getElementById('loginBtn');

  errEl.style.display = 'none';

  const admin = JSON.parse(localStorage.getItem('nursery_admin'));

  if (username === admin.username && password === admin.password) {
    btn.textContent = '✅ Logging in...';
    sessionStorage.setItem('nursery_logged_in', 'true');
    sessionStorage.setItem('nursery_user', admin.name);
    setTimeout(() => { window.location.href = '/dashboard'; }, 600);
  } else {
    errEl.style.display = 'block';
    document.getElementById('password').value = '';
    document.getElementById('password').focus();
  }
});

// Allow Enter key on username to focus password
document.getElementById('username').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') document.getElementById('password').focus();
});
