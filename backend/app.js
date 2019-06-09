const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const categoriesRouter = require("./routes/categories");

const db = "mongodb://localhost/source-code";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("", categoriesRouter);

mongoose.connect(
  db,
  {
    useFindAndModify: false,
    useNewUrlParser: true
  },
  error => {
    if (error) return console.log("Connection to mongodb failed", error);
    console.log("Connected to mongodb...");
  }
);

module.exports = app;
