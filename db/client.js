const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://uurmucif:pxZ0s0sLBss_KBvmKzyJnuNvqM_ggL6f@bubble.db.elephantsql.com/uurmucif';

const client = new Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;