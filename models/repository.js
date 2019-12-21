const mongoose = require("mongoose");

const schema = {
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: false },
  html_url: { type: String, required: true }
};

const repository_schema = new mongoose.Schema(schema);
const Repository = mongoose.model("Repository", repository_schema);

module.exports = Repository;
