const express = require("express");
const router = express.Router();
const {
  create,
  allBlogs,
  addBlog,
  blogDetails,
  deleteBlog,
} = require("../controllers/controllers");

router.get("/blogs", allBlogs);

router.post("/blogs", addBlog);

router.get("/blogs/create", create);

router.get("/blogs/:id", blogDetails);

router.delete("/blogs/:id", deleteBlog);

router.get("/", (req, res) => {
  res.redirect("/blogs");
});

router.get("/about", (req, res) => {
    res.render("about", { title: "About" });
  });
  
  // 404 page
  router.use((req, res) => {
    res.status(404).render("404", { title: "404" });
  });

module.exports = router;
