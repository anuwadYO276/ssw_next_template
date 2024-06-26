// lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '10.1.112.83',
  user: 'swp_root',
  password: 'Password123#@!',
  database: 'db_ssw_dlt',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
