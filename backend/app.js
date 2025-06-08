<<<<<<< HEAD
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
=======
const express = require("express");
const cors = require("cors");

const apiRoutes = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});

// Mount API routes under /api
app.use("/api", apiRoutes);

module.exports = app;
>>>>>>> 162b1a8cc29058d7e8ed552cc4be8943a40816b7
