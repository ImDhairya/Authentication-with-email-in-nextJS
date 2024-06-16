import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("error", (error) => {
      console.log("MongoDB connection Errror" + error);
      process.exit(1);
    });
  } catch (error) {
    console.log("Error connection to db", error);
  }
}
