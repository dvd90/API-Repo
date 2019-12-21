const mongoose = require("mongoose"),
  autoIncrement = require("mongoose-auto-increment");
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
var connection = mongoose.createConnection(url);

autoIncrement.initialize(connection);

const schema = {
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: false },
  html_url: { type: String, required: true }
};

const repository_schema = new mongoose.Schema(schema);
repository_schema.plugin(autoIncrement.plugin, {
  model: "Repository",
  field: "id",
  startAt: 1
});
const Repository = mongoose.model("Repository", repository_schema);

module.exports = Repository;
