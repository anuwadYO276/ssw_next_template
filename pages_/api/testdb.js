// pages/api/testdb.js

import db from '../../lib/db';

export default async function handler(req, res) {
  try {
    await db.connect(); // เชื่อมต่อกับฐานข้อมูล

    // ถ้าเชื่อมต่อสำเร็จ ส่งข้อความกลับว่าสามารถเชื่อมต่อฐานข้อมูลได้
    res.status(200).json({ message: 'Connected to database successfully' });
  } catch (error) {
    // หากเกิดข้อผิดพลาดในการเชื่อมต่อ
    res.status(500).json({ error: error.message });
  } finally {
    // ในทุกกรณี ต้องปิดการเชื่อมต่อฐานข้อมูล
    await db.end();
  }
}
