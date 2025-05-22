const db = require("../db");

// Get all movies
async function getAll() {
  const result = await db.query("SELECT * FROM movies ORDER BY id");
  return result.rows;
}

// Create a movie
async function create({ title, director }) {
  const result = await db.query(
    "INSERT INTO movies (title, director) VALUES ($1, $2) RETURNING *",
    [title, director]
  );
  return result.rows[0];
}

module.exports = {
  getAll,
  create,
};
