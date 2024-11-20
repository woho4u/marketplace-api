const express = require("express");
const router = express.Router();

// Example Route
router.get("/status", (req, res) => {
   res.json({ message: "Api is running..." });
});

module.exports = router;
