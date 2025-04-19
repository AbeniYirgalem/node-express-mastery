const express = require("express");
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
app.use(express.static("public")); // Static files

// listen for requests
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.use(morgan('dev'));

app.use("/about", (req, res, next) => {
  console.log("new request made.");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Abeni's blog",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Abeni finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
