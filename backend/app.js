const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/index");
const movieRoutes = require("./routes/movies");

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
    res.status(200).send("OK");
  });


app.use("/api/", homeRoutes);
app.use("/api/movies", movieRoutes);

module.exports = app;
