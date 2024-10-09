import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
        },
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Seller",
        },
        amount: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    },
    { versionKey: false }
)

const transactionModel = mongoose.model("transaction", transactionSchema)
export default transactionModel
