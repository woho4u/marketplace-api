const { connectToDatabase } = require("../lib/mongoose");
const Item = require("../models/Project");

const express = require("express");
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// POST route to handle data submission
router.post("/add-project", async (req, res) => {
   const { auth0Id, email, name, picture } = req.body;

   try {
      // Check if the user already exists
      let user = await User.findOne({ auth0Id });

      if (!user) {
         // Add the user if they don't exist
         user = new User({
            auth0Id,
            email,
            name,
            picture,
         });
         await user.save();
      }

      res.status(200).json({ message: "User added or already exists", user });
   } catch (error) {
      console.error("Error saving item:", error);
      res.status(500).json({ success: false, error: error.message });
   }
});

module.exports = router;
