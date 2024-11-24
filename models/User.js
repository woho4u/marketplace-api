const { Schema, model, models } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
   {
      email: { type: String, required: true, unique: true }, // E-post (unik)
      name: { type: String }, // Fullt navn
      password: { type: String }, // Hashet passord
      bio: { type: String }, // Kort bio om brukeren
      profilePicture: { type: String }, // URL til profilbilde
      location: { type: String }, // Sted/by
      projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }], // Prosjekter opprettet
      reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // Anmeldelser mottatt
      dateJoined: { type: Date, default: Date.now }, // Når brukeren ble med
   },
   { collection: "users" }
);

// Avoid overwriting models when hot-reloading in development
module.exports = mongoose.models.User || model("User", UserSchema);
