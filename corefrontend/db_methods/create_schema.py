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

# Open a cursor to perform database operations
with conn.cursor() as cur:
    # Execute the SQL schema from a file
    with open('mealflow_schema.sql', 'r') as f:
        sql_schema = f.read()
        cur.execute(sql_schema)
        #print(sql_schema)

    # Commit the changes
    conn.commit()

print('Database schema created successfully!')