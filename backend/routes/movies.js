const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.getAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new movie
router.post("/", async (req, res) => {
  try {
    const { title, director } = req.body;

    if (!title || !director) {
      return res.status(400).json({ error: "Title and director are required." });
    }

    const movie = await Movie.create({ title, director });
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
