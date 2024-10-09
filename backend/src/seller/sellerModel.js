import mongoose from "mongoose"

const sellerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        shopName:{
            type:String,
            required:true
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
        location:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
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
        products: {
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

const sellerModel = mongoose.model("seller", sellerSchema)
export default sellerModel
