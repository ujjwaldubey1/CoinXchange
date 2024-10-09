import mongoose from "mongoose"

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
        },
        coins: {
            type: Number,
        },
        transactions: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Transaction",
                },
            ],
        },
        favorites: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
            ],
        },
    },
    { versionKey: false }
)

const customerModel = mongoose.model("customer", customerSchema)
export default customerModel
