const express = require("express");
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("Piece route is working!");
});

module.exports = router;
