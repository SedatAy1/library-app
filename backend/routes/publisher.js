const express = require("express");
const router = express.Router();
const Publisher = require("../models/Publisher");

router.get("/", async (req, res) => {
  const publishers = await Publisher.find();
  res.json(publishers);
});

router.post("/", async (req, res) => {
  const publisher = new Publisher(req.body);
  await publisher.save();
  res.json(publisher);
});

router.put("/:id", async (req, res) => {
  const publisher = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(publisher);
});

router.delete("/:id", async (req, res) => {
  await Publisher.findByIdAndDelete(req.params.id);
  res.json({ message: "Yayımcı silindi" });
});

module.exports = router;
