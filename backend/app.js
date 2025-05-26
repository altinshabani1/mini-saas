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
