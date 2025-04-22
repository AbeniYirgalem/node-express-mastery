const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require('./Router/routes');

// express app
const app = express();

//
const dbURL =
  "mongodb+srv://Abeni:AbeniYirgalem7030@backenddb.wc32j.mongodb.net/mydb?retryWrites=true&w=majority&appName=BackendDB";
mongoose
  .connect(dbURL)
  .then((result) =>
    app.listen(3000, () =>
      console.log("Server running at http://localhost:3000")
    )
  )
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Static files

app.use(morgan("dev"));

app.use('/', router);

