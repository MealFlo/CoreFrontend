# # Connect to the PostgreSQL database
# conn = psycopg2.connect(
#     host="localhost",
#     database="my_first",
#     user="postgres",
#     password="password"
# )

# # Create a cursor object
# cur = conn.cursor()

# # Execute a SELECT query to fetch data from the users table
# cur.execute("SELECT * FROM users")

# # Fetch all the rows
# rows = cur.fetchall()

# # Print the fetched data
# for row in rows:
#     print(row)

# # Close the cursor and connection
# cur.close()
# conn.close()

conn = psycopg2.connect(
    user="aryan", 
    password="Meal@1234", 
    host="mealflowpostgresql.postgres.database.azure.com", 
    port=5432, 
    database="postgres", 
    sslmode="require")

print("Connection established")
cursor = conn.cursor()

# Drop previous table of same name if one exists
cursor.execute("DROP TABLE IF EXISTS inventory;")
print("Finished dropping table (if existed)")

# Create a table
cursor.execute("CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);")
print("Finished creating table")

# Insert some data into the table
cursor.execute("INSERT INTO inventory (name, quantity) VALUES (%s, %s);", ("banana", 150))
cursor.execute("INSERT INTO inventory (name, quantity) VALUES (%s, %s);", ("orange", 154))
cursor.execute("INSERT INTO inventory (name, quantity) VALUES (%s, %s);", ("apple", 100))
print("Inserted 3 rows of data")

# Clean up
conn.commit()
cursor.close()
conn.close()