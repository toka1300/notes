# -------Executing queries from within Ruby----------
# --> Ctrl + Shift + p
# Type "SQLite: New Query"
# Write your query as normal in here

# -------Heredoc-----------
query = <<~SQL
    SELECT * FROM food
SQL
rows = db.execute(query)
