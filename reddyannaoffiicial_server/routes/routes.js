const express = require("express");
const { Category, Blog, Contact } = require("../models/index");
const { upload } = require("./img");

const router = express.Router();

router.post("/category", async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const categories = await Category.create({ category });

    res
      .status(201)
      .json({ message: "Category created successfully", categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/category", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/blog", upload.single("blog_img"), async (req, res) => {
  try {
    const { blog_title, description, categoryId } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    console.log(req.file.filename);

    const blog = await Blog.create({
      blog_title,
      description,
      blog_img: req.file.filename,
      categoryId,
      date: new Date(),
    });

    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: [{ model: Category, attributes: ["category"] }],
    });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id, {
      include: [{ model: Category, attributes: ["category"] }],
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await blog.destroy();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/category/:categoryId", async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      where: { categoryId: req.params.categoryId },
      include: [{ model: Category, attributes: ["category"] }],
    });

    if (!blogs.length) {
      return res
        .status(404)
        .json({ message: "No blogs found for this category" });
    }

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/contact", async (req, res) => {
  try {
    const { first_name, last_name, email, phone, message } = req.body;

    const contact = await Contact.create({
      first_name,
      last_name,
      email,
      phone,
      message,
    });

    res
      .status(201)
      .json({ message: "Contact submitted successfully", contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
