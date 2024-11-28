const { Schema, model, models } = require("mongoose");
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
   {
      title: { type: String, required: true },
      description: { type: String, required: true },
      images: { type: [String] },
      price: { type: Number, required: true },
      category: { type: String, required: true },
      // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      creator: { type: String },
      location: { type: String },
      materials: { type: [String] },
      dimensions: {
         height: { type: Number },
         width: { type: Number },
         depth: { type: Number },
      },
      available: { type: Boolean, default: true },
      tags: { type: [String] },
      dateCreated: { type: Date, default: Date.now },
      ratings: {
         average: { type: Number },
         reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
      },
   },
   { collection: "projects" }
);

// Avoid overwriting models when hot-reloading in development
module.exports = mongoose.models.Project || model("Project", ProjectSchema);
