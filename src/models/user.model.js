const db = require('../config/db');

const createUser = async (name, phone, password, role) => {
  const result = await db.query(
    `INSERT INTO users (name, phone, password, role)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, phone, password, role]
  );
  return result.rows[0];
};

const findUserByPhone = async (phone) => {
  const result = await db.query(
    `SELECT * FROM users WHERE phone = $1`,
    [phone]
  );
  return result.rows[0];
};

module.exports = { createUser, findUserByPhone };
