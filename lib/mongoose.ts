import mongoose from "mongoose";

const mongoURI = process.env.mongoURI as string;
if (!mongoURI) {
   throw new Error("Please define the mongoURI in your environment variables");
}

let isConnected = false;

export const connectToDatabase = async () => {
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
