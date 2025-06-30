const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const sql = "SELECT * FROM Products;";

    db.all(sql, [], (err, rows) => { // db.all ใช้สำหรับดึงข้อมูลหลายแถว
    if (err) {
      // หากเกิดข้อผิดพลาดในการดึงข้อมูล
      res.status(500).json({ error: err.message });
      return;
    }
    // ส่งข้อมูลที่ได้กลับไปในรูปแบบ JSON
    res.json({
      message: 'Success',
      data: rows, // 'rows' คือ Array ของ Object ที่เป็นข้อมูลสินค้า
    });
  });
});

module.exports = router;