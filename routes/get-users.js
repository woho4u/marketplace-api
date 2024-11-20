const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../lib/mongoose");
const { Item } = require("../models/Item");

// Example Route
router.get("/get-users", async (req, res) => {
   try {
      await connectToDatabase();

      const items = await Item.find();

      res.json({ data: items });
   } catch (error) {
      console.error("Error saving item:", error);
      res.status(500).json({ success: false, error: error.message });
   }
});

module.exports = router;
