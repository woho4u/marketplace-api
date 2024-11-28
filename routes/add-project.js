const { connectToDatabase } = require("../lib/mongoose");
const Project = require("../models/Project");

const express = require("express");
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// POST route to handle data submission
router.post("/add-project", async (req, res) => {
   try {
      // Connect to the database
      await connectToDatabase();

      // Extract data from the request body
      console.log("");
      console.log("");
      console.log("");
      console.log("");
      console.log("");
      console.log("");
      console.log("");
      console.log("Request body: ", req.body.project);

      const data = req.body.project;

      if (data._id === "" || !data._id) {
         delete data._id;
      }

      // Create and save a new item
      const newProject = new Project(data);
      const savedProject = await newProject.save();

      // Send a success response
      res.status(201).json({ success: true, item: savedProject });
   } catch (error) {
      console.error("Error saving project:", error);
      res.status(500).json({ success: false, error: error.message });
   }
});

module.exports = router;
