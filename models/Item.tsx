import mongoose, { Schema, model, models } from "mongoose";

const ItemSchema = new Schema({
   name: { type: String, required: true },
   price: { type: Number, required: true },
});

// Avoid overwriting models when hot-reloading in development
export const Item = models.Item || model("Item", ItemSchema);
