const { Router } = require("express");
const { upload } = require("./img");
// const { Card, Slider } = require("../models"); // Import Sequelize models
const { Card, Slider } = require("../models/index");
const path = require("path");
const fs = require("fs");
const router = Router();

// ✅ GET all cards
router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.findAll({ order: [["date", "DESC"]] });
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch cards" });
  }
});

// ✅ POST a new card
router.post("/cards", upload.single("card"), async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const newCard = await Card.create({
      title,
      description,
      imageUrl: req.file.filename,
      date: new Date(),
    });

    res
      .status(201)
      .json({ message: "Card uploaded successfully", card: newCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload card" });
  }
});

// ✅ DELETE a card
router.delete("/cards/:id", async (req, res) => {
  try {
    const card = await Card.findByPk(req.params.id);
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    const imagePath = path.join(__dirname, "../public/card", card.imageUrl);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await card.destroy();
    res.json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete card" });
  }
});

// ✅ GET all sliders
router.get("/sliders", async (req, res) => {
  try {
    const sliders = await Slider.findAll({ order: [["date", "DESC"]] });
    res.json(sliders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch sliders" });
  }
});

// ✅ POST a new slider
router.post("/sliders", upload.single("slider"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const newSlider = await Slider.create({
      imageUrl: req.file.filename,
      date: new Date(),
    });

    res
      .status(201)
      .json({ message: "Slider uploaded successfully", slider: newSlider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload slider" });
  }
});

// ✅ DELETE a slider
router.delete("/sliders/:id", async (req, res) => {
  try {
    const slider = await Slider.findByPk(req.params.id);
    if (!slider) {
      return res.status(404).json({ error: "Slider not found" });
    }

    const imagePath = path.join(__dirname, "../public/slider", slider.imageUrl);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await slider.destroy();
    res.json({ message: "Slider deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete slider" });
  }
});

module.exports = router;
