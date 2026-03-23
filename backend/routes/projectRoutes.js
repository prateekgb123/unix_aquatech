const router = require("express").Router();
const Project = require("../models/Project");

// GET
router.get("/", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

module.exports = router;