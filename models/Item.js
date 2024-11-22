const { Schema, model, models } = require("mongoose");
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      price: { type: Number, required: true },
   },
   { collection: "users" }
);

// Avoid overwriting models when hot-reloading in development
console.log("models", models);
console.log("models.Item", models.Item);
module.exports = mongoose.models.Item || model("Item", ItemSchema);
