const { mongoose } = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: String,
  about: String,
  image: String,
});
const Authors = mongoose.model("Authors", authorSchema);
module.exports = Authors;