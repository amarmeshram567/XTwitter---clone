import mongoose from "mongoose"
import { ENV } from "./env.js"

export const connectDB = async () => {
    try {

        await mongoose.connect(ENV.MONGO_URI)
        console.log("Database connected")
        
    } catch (error) {
        console.log("Error connectiing to mongodb")
        process.exit(1)
    }
}