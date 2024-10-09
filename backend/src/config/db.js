import mongoose from "mongoose"
import { config } from "./config.js"

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Successfully Connected to DATABASE")
        })

        mongoose.connection.on("error", (err) => {
            console.log("Error in connecting to DATABASE", err)
        })

        await mongoose.connect(config.dbUrl)
    } catch (err) {
        console.log("Failed to connect to DATABASE")
    }
}

export default connectDB
