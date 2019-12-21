module.exports = app => {
  const ctrl = require("../controllers/controller.js");

  // Create a new Repository
  app.post("/api/repositories", ctrl.createRepository);

  // Retrieve all Repositories
  app.get("/api/repositories", ctrl.getAllRepositories);

  // Retrieve a Repository with repoId
  app.get("/api/repository/:id", ctrl.getRepository);

  // Update a Repository with repoId
  app.put("/api/repository/:id", ctrl.updateRepository);

  // Delete a Repository with repoId
  app.delete("/api/repository/:id", ctrl.deleteRepository);
};
