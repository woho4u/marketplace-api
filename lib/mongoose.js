const mongoose = require("mongoose");

require("dotenv").config({ path: ".env.local" });
console.log("Mongo URI from .env.local:", process.env.mongoURI);

const mongoURI = process.env.mongoURI;
console.log("MongoURI:", process.env.mongoURI);

if (!mongoURI) {
   throw new Error("Please define the mongoURI in your environment variables");
}

let isConnected = false;

const connectToDatabase = async () => {
   if (isConnected) {
      console.log("Using existing database connection");
      return;
   }

   try {
      const db = await mongoose.connect(mongoURI);
      isConnected = !!db.connections[0].readyState;
      console.log("Connected to MongoDB Atlas");
   } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
   }
};

module.exports = { connectToDatabase };
