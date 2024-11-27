const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String },
  publisher: { type: String },
  borrowed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Book", BookSchema);
