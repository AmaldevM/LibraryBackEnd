const express = require("express");
const router = express.Router();
const {
  getAllAuthors,
  getAuthorById,
  addAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorControllers");

// setting route to get all Authors
router.get("/",getAllAuthors);

// setting route to get Author by id 
router.get("/:AuthorId", getAuthorById)

// setting route to add Author
router.post("/", addAuthor)

// setting route to update Author
router.patch("/:AuthorId", updateAuthor)

//setting route to delete Author
router.delete("/:AuthorId",deleteAuthor)

module.exports = router;
