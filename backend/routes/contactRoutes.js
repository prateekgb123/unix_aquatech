const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const data = new Contact(req.body);
  await data.save();
  res.json({ message: "Enquiry Saved" });
});

module.exports = router;