const mongoose = require("mongoose");

const BorrowSchema = new mongoose.Schema({
  book: { type: String, required: true },
  user: { type: String, required: true },
  borrowDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
});

module.exports = mongoose.model("Borrow", BorrowSchema);
