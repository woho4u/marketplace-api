const express = require("express");
const router = express.Router();
const { connectToDatabase } = require("../lib/mongoose");
const Project = require("../models/Project");

// Example Route
router.get("/get-projects", async (req, res) => {
   try {
      await connectToDatabase();

      const projects = await Project.find();

      res.json({ data: projects });
   } catch (error) {
      console.error("Error saving item:", error);
      res.status(500).json({ success: false, error: error.message });
   }
});

module.exports = router;
