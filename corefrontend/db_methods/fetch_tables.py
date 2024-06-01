# fetch the all the current tables from the database

import os
import psycopg2
          
# Connect to the PostgreSQL database
conn = psycopg2.connect(
    user="aryan", 
    password="Meal@1234", 
    host="mealflowpostgresql.postgres.database.azure.com", 
    port=5432, 
    database="postgres", 
    sslmode="require"
)

with conn.cursor() as cur:
    # Get a list of all tables
    cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'")
    tables = cur.fetchall()

    # Print the table names
    for table in tables:
        print(table[0])

print('Fetched all tables successfully!')