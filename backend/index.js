const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

const PORT = 4000;

// Controllers
const TextController = require("./controllers/TextController");

// routes
app.get("/iecho", TextController);

app.listen(PORT, () => console.log("Server is listening to port " + PORT));

module.exports = app;
