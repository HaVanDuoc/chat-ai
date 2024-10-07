import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("[server] Connected to MongoDB");
    } catch (err) {
        console.error('Error connecting to MongoDB: ', err);
        throw new Error(`Error connecting to MongoDB: ${err instanceof Error ? err.message : err}`);
    }
};

export default connectDB