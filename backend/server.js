// backend/server.js
const express = require('express');
const cors = require('cors'); // Import cors middleware
const productRoutes = require('./routes/products'); // Import routes ของสินค้า

const app = express();
const port = 5000; // API ของเราจะรันที่พอร์ต 5000

// Middleware
app.use(cors()); // อนุญาต Cross-Origin Requests จาก Frontend
app.use(express.json()); // Middleware สำหรับ Parse JSON body ใน Request (ถ้ามี POST/PUT request)

// กำหนด Base Path สำหรับ API routes ของสินค้า
// ทุก request ที่เริ่มต้นด้วย /api/products จะถูกส่งไปให้ productRoutes จัดการ
app.use('/api/products', productRoutes);

// Endpoint ทดสอบง่ายๆ สำหรับ root path (Optional)
app.get('/', (req, res) => {
  res.send('Welcome to the API server!');
});

// เริ่มต้น Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Products API available at: http://localhost:${port}/api/products`);
});