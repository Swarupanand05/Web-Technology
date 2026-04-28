// store.js — localStorage Data Layer

const Store = {
  // ── Plants ──
  getPlants() { return JSON.parse(localStorage.getItem('nursery_plants') || '[]'); },
  savePlants(plants) { localStorage.setItem('nursery_plants', JSON.stringify(plants)); },

  addPlant(plant) {
    const plants = this.getPlants();
    plant.id = 'PLT_' + Date.now();
    plant.createdAt = new Date().toISOString();
    plants.push(plant);
    this.savePlants(plants);
    return plant;
  },

  updatePlant(id, data) {
    const plants = this.getPlants().map(p => p.id === id ? { ...p, ...data } : p);
    this.savePlants(plants);
  },

  deletePlant(id) {
    this.savePlants(this.getPlants().filter(p => p.id !== id));
  },

  getPlantById(id) { return this.getPlants().find(p => p.id === id); },

  // ── Orders ──
  getOrders() { return JSON.parse(localStorage.getItem('nursery_orders') || '[]'); },
  saveOrders(orders) { localStorage.setItem('nursery_orders', JSON.stringify(orders)); },

  addOrder(order) {
    const orders = this.getOrders();
    order.id = 'ORD_' + Date.now();
    order.status = 'Pending';
    order.createdAt = new Date().toISOString();
    orders.push(order);
    this.saveOrders(orders);
    return order;
  },

  updateOrder(id, data) {
    const orders = this.getOrders().map(o => o.id === id ? { ...o, ...data } : o);
    this.saveOrders(orders);
  },

  getPendingOrders() { return this.getOrders().filter(o => o.status === 'Pending'); },
  getSoldOrders() { return this.getOrders().filter(o => o.status === 'Sold'); },

  getOrderById(id) { return this.getOrders().find(o => o.id === id); },
};

// Seed sample plants if empty
(function seedPlants() {
  if (Store.getPlants().length === 0) {
    const samples = [
      { name: 'Rose', category: 'Flower', qty: 120, price: 30, desc: 'Beautiful red roses' },
      { name: 'Mango', category: 'Fruit', qty: 45, price: 150, desc: 'Alphonso mango saplings' },
      { name: 'Tulsi', category: 'Herb', qty: 200, price: 15, desc: 'Holy basil' },
      { name: 'Neem', category: 'Tree', qty: 60, price: 80, desc: 'Medicinal neem tree' },
      { name: 'Marigold', category: 'Flower', qty: 300, price: 10, desc: 'Yellow marigold' },
      { name: 'Tomato', category: 'Vegetable', qty: 180, price: 20, desc: 'Hybrid tomato plant' },
    ];
    samples.forEach(s => Store.addPlant(s));
  }
})();
