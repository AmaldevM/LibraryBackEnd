const Authors = require("../models/authorModel");

const getAllAuthors = async (req, res) => {
  const authors = await Authors.find({});
  res.send(authors);
};
const getAuthorById = async (req, res) => {
    const author = await Authors.findById(req.params.AuthorId).exec();
    res.json(author)
};
const addAuthor = async (req, res) => {
  const authorData = req.body;
  const author = new Authors(authorData);
  await author.save();
  res.send(author);
};
const updateAuthor = async (req, res) => {
  const authorData = req.body;
  const author = await Authors.findByIdAndUpdate(
    req.params.AuthorId,
    authorData,
    { new: true }
  );
  res.json(author);
};
const deleteAuthor = async (req, res) => {
  const authorId = req.params.AuthorId;
  await Authors.findByIdAndDelete(authorId);
  res.send("Author deleted");
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  addAuthor,
  updateAuthor,
  deleteAuthor,
};
