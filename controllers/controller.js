const mongoose = require("mongoose");
const Repository = require("../models/repository");
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
const options = {
  useCreateIndex: true,
  useNewUrlParser: true
};

module.exports = {
  getAllRepositories(req, res, next) {
    mongoose
      .connect(url, options)
      .then(async () => {
        const result = await Repository.find({});

        if (result) res.json(result);
        else res.status(404).send("not found");
      })
      .catch(err => {
        console.error("some error occurred", err);
        res.status(500).send(err.message);
      });
  },
  getRepository(req, res, next) {
    mongoose
      .connect(url, options)
      .then(async () => {
        const { id = null } = req.params;

        const result = await Repository.findOne({ id });

        if (result) res.json(result);
        else
          res
            .status(404)
            .send("The repo was not found with the id provided 😔");
      })
      .catch(err => {
        console.error("some error occurred", err);
        res.status(500).send(err.message);
      });
  },
  createRepository(req, res, next) {
    mongoose
      .connect(url, options)
      .then(async () => {
        const {
          id = null,
          name = null,
          owner = null,
          description = null,
          html_url = null
        } = req.body;
        const repo = new Repository({ id, name, owner, description, html_url });
        const result = await repo.save();

        if (result) res.json(result);
        else res.status(404).send("not found");
      })
      .catch(err => {
        console.error("some error occurred", err);
        res.status(500).send(err.message);
      });
  },
  deleteRepository(req, res, next) {
    mongoose
      .connect(url, options)
      .then(async () => {
        const { id = null } = req.params;
        console.log(Repository.count());
        const result = await Repository.deleteOne({ id });

        if (result.deletedCount !== 0) {
          res.json(result);
        } else {
          res
            .status(404)
            .send("The repo was not found with the id provided 😔");
        }
      })
      .catch(err => {
        console.error("some error occurred", err);
        res.status(500).send(err.message);
      });
  },
  updateRepository(req, res, next) {
    mongoose
      .connect(url, options)
      .then(async () => {
        const { id = null } = req.params;
        const body = req.body;

        const result = await Repository.updateOne({ id }, body);

        if (result.nModified !== 0) {
          res.json(result);
        } else {
          res
            .status(404)
            .send("The repo was not found with the id provided 😔");
        }
      })
      .catch(err => {
        console.error("some error occurred", err);
        res.status(500).send(err.message);
      });
  }
};
