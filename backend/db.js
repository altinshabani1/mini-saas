const { Pool } = require('pg');
require('dotenv').config();

// Fallback connection string if env var is missing (adjust this to your Docker setup)
const connectionString =
  process.env.DB_URL ||
  "postgresql://minisaas:12345678@postgres-db:5432/postdb";

const pool = new Pool({ connectionString });

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
