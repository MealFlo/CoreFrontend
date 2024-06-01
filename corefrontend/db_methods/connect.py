import psycopg2
import os 

# get username and password from .env file

conn = psycopg2.connect(
    user="aryan", 
    password="Meal@1234", 
    host="mealflowpostgresql.postgres.database.azure.com", 
    port=5432, 
    database="postgres", 
    sslmode="require")

print("Connection established")
cursor = conn.cursor()

# # Drop previous table of same name if one exists
# cursor.execute("DROP TABLE IF EXISTS inventory;")
# print("Finished dropping table (if existed)")

# # Create a table
# cursor.execute("CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);")
# print("Finished creating table")

# # Insert some data into the table
# cursor.execute("INSERT INTO inventory (name, quantity) VALUES (%s, %s);", ("banana", 150))
# cursor.execute("INSERT INTO inventory (name, quantity) VALUES (%s, %s);", ("orange", 154))
# cursor.execute("INSERT INTO inventory (name, quantity) VALUES (%s, %s);", ("apple", 100))
# print("Inserted 3 rows of data")

# Get all the rows
# cursor.execute("SELECT * FROM inventory;")
# rows = cursor.fetchall()
# print("Here are the rows:")
# for row in rows:
#     print("   ", row)


# Clean up
conn.commit()
cursor.close()
conn.close()