const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes - serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// ── Upload Logo (base64) ──
app.post('/api/upload-logo', (req, res) => {
  try {
    const { base64 } = req.body;
    if (!base64) return res.status(400).json({ error: 'No image data' });

    const matches = base64.match(/^data:image\/(\w+);base64,(.+)$/);
    if (!matches) return res.status(400).json({ error: 'Invalid base64 image' });

    const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
    const data = Buffer.from(matches[2], 'base64');
    const dir = path.join(__dirname, 'public', 'images');

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `logo.${ext}`), data);
    // Also write as logo.png for consistent reference
    fs.writeFileSync(path.join(dir, 'logo.png'), data);

    res.json({ success: true, url: `/images/logo.png` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Nursery Management Server Running', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🌱 Nursery Management System`);
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📋 Admin Login: http://localhost:${PORT}/`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard`);
  console.log(`\nDefault Admin Credentials:`);
  console.log(`  Username: admin`);
  console.log(`  Password: Admin@123`);
});
