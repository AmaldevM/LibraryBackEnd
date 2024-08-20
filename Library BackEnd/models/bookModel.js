const { mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  image: String,
  description: String,
  isFeatured: Boolean,
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
