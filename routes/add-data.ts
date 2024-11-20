import { connectToDatabase } from "@/lib/mongoose";
import { Item } from "@/models/Item";

export async function POST(request: Request) {
   try {
      await connectToDatabase();

      const data = await request.json();

      const newItem = new Item(data);
      const savedItem = await newItem.save();

      return new Response(JSON.stringify({ success: true, item: savedItem }), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      });
   } catch (error) {
      console.error("Error saving item:", error);
      return new Response(JSON.stringify({ success: false, error: error }), {
         status: 500,
         headers: { "Content-Type": "application/json" },
      });
   }
}
