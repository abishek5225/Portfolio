const express = require("express");
const router = express.Router();


const cors = require('cors');
app.use(cors());


let blogs = [
  { id: 1, title: "Sample Blog 1", content: "Content of Blog 1", views: 120 },
  { id: 2, title: "Sample Blog 2", content: "Content of Blog 2", views: 95 },
  {id : 3, title: "Sample Blog 3", content: "Content of Blog 3", views: 100}
];

// Fetch all blogs
router.get("/blogs", (req, res) => {
  res.json(blogs);
});

// Add a new blog
router.post("/blogs", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and Content are required!" });
  }
  const newBlog = {
    id: blogs.length + 1,
    title,
    content,
    views: 0,
  };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

module.exports = router;

router.Listen(3000, () => {
  console.log('Server is running on port 3000');
});