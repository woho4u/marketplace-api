import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.mongoURI; // Ensure this is in your .env file
let client: MongoClient;

export async function POST(request: Request) {
   try {
      // Parse the request body
      const data = await request.json();

      // Initialize the MongoDB client if not already connected
      if (!client) client = new MongoClient(uri);
      const connection = await client.connect();
      const db = connection.db("yourDatabaseName"); // Replace with your database name
      const collection = db.collection("yourCollectionName"); // Replace with your collection name

      // Insert data
      const result = await collection.insertOne(data);

      // Close the connection (optional for serverless, but good for longer processes)
      await connection.close();

      // Respond with success
      return NextResponse.json({ success: true, insertedId: result.insertedId });
   } catch (error) {
      console.error("Error adding data:", error);
      return NextResponse.json({ success: false, error: error.message });
   }
}
