const router = require("express").Router();
const Service = require("../models/Service");

// GET
router.get("/", async (req, res) => {
  const data = await Service.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.json(newService);
});

module.exports = router;