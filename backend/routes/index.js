const express = require("express");
const moviesRouter = require("./movies");
const router = express.Router();

// Example route at /api/
router.get("/", (req, res) => {
  res.send("Welcome to the Mini-Saas API!");
});

router.use("/movies", moviesRouter);

module.exports = router;
