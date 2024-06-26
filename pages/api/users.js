// pages/api/users.js
import db from '../../lib/db';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const [rows] = await db.query('SELECT * FROM tbt_status');
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'POST':
      try {

        const {emp_code} = req.body;
        await db.query( 'INSERT INTO NAT_USERS (emp_code) VALUES (?)', [emp_code] );
       
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
