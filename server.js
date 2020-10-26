const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const cors = require("cors");
var corsOptions = {
  // origin: "http://localhost:3200",
  origin: "*",
};
app.use(cors(corsOptions));

const app = express();

app.use("/", serveStatic(path.join(__dirname, "/dist")));

const port = process.env.PORT || 8080;
app.listen(port);
