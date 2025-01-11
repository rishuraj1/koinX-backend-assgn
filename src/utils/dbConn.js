import mongoose from "mongoose";
import logger from "./logger";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("Mongo URI not found");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`Error connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
