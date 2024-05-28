const { Client } = require('pg');
const fs = require('fs');

console.log('Azure DB Admin: ' + process.env.AZURE_DB_ADMIN)

var client = new Client({
    host:"mealflowpostgresql.postgres.database.azure.com", 
    user:"aryan", 
    password:"Meal@1234", 
    database:"postgres", 
    port:5432, 
    ssl:{ rejectUnauthorized: false }//{ca:fs.readFileSync("{ca-cert filename}")}
});

client.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connected to PostgreSQL database');
});

module.exports = client;