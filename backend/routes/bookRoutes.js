const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Tüm kitapları getir
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Yeni kitap ekle
router.post("/", async (req, res) => {
  const { title, author, category, publisher, available } = req.body;
  try {
    const newBook = new Book({ title, author, category, publisher, available });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Kitabı güncelle
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Kitabı sil
router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
