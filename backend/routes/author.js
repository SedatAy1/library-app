const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

router.get("/", async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
});

router.post("/", async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.json(author);
});

router.put("/:id", async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(author);
});

router.delete("/:id", async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "Yazar silindi" });
});

module.exports = router;
