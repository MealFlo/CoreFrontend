const { Client } = require('pg');
require('dotenv').config();

console.log('Azure DB Admin: ' + process.env.AZURE_DB_ADMIN)

var client = new Client({
    host:"mealflowpostgresql.postgres.database.azure.com", 
    user: process.env.AZURE_DB_ADMIN, 
    password: process.env.AZURE_DB_PASSWORD, 
    database:"postgres", 
    port:5432, 
    ssl:{ rejectUnauthorized: false }
});

client.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connected to PostgreSQL database');
});

module.exports = client;