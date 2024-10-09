import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        reviews:{
            type:String,
            required:true
        },
    },
    { versionKey: false }
)

const productModel = mongoose.model("product", productSchema)
export default productModel
