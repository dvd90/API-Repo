module.exports = app => {
  const ctrl = require("../controllers/controller.js");

  // Create a new Repository
  app.post("/repositories", ctrl.createRepository);

  // Retrieve all Repositories
  app.get("/repositories", ctrl.getAllRepositories);

  // Retrieve a Repository with repoId
  app.get("/repository/:id", ctrl.getRepository);

  // Update a Repository with repoId
  app.put("/repository/:id", ctrl.updateRepository);

  // Delete a Repository with repoId
  app.delete("/repository/:id", ctrl.deleteRepository);
};
