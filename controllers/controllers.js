const Blog = require("../models/blogs");

const create = (req, res) => {
  res.render("create", { title: "Create a new Blog" });
};

const allBlogs = (req, res) => {
  const blogs = Blog.find().sort({ createdAt: -1 });
  blogs
    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
};

const addBlog = (req, res) => {
  const { title, snippet, body } = req.body;
  const blog = new Blog({ title, snippet, body });
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};

const blogDetails = (req, res) => {
  const id = req.params.id;
  const singleBlog = Blog.findById(id);
  singleBlog
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" });
    });
};

const deleteBlog = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create,
  allBlogs,
  addBlog,
  blogDetails,
  deleteBlog,
};
