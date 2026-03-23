const router = require("express").Router();
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload Image/Video
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    const result = await cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) return res.status(500).json(error);
        res.json(result);
      }
    );

    result.end(file.buffer);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;