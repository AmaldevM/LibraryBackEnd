const Book = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.send(books);
};
const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.bookId).exec();
  res.json(book)
};
const addBook = async (req, res) => {
  const bookData = req.body;
  const book = new Book(bookData);
  await book.save();
  res.send(book);
};
const updateBook =async (req, res) => {
  const bookData = req.body
    const book = await Book.findByIdAndUpdate(req.params.bookId, bookData , { new: true })
    res.json(book)
};
const deleteBook = async (req, res) => {
  const bookId = req.params.bookId
  await Book.findByIdAndDelete(req.params.bookId)
  res.send("deleted")
};
const getFeaturedBooks = async (req, res) => {
  const featuredBooks = await Book.find({ isFeatured: true })
  res.send(featuredBooks)
}

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook, getFeaturedBooks };
