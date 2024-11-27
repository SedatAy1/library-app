const express = require("express");
const router = express.Router();
const Borrow = require("../models/Borrow");

router.get("/", async (req, res) => {
  const borrows = await Borrow.find();
  res.json(borrows);
});

router.post("/", async (req, res) => {
  const borrow = new Borrow(req.body);
  await borrow.save();
  res.json(borrow);
});

router.put("/:id", async (req, res) => {
  const borrow = await Borrow.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(borrow);
});

router.delete("/:id", async (req, res) => {
  await Borrow.findByIdAndDelete(req.params.id);
  res.json({ message: "Ödünç alma işlemi silindi" });
});

module.exports = router;
