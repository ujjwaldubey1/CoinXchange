// import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import productModel from "./productModel"

const createProduct = async() => {
    try {
        const {title, description, photo, price, quantity} = req.body

        const product = await productModel.create({
            title,
            description,
            photo,
            price,
            quantity
        })

        const resProduct = {
            title: product.title,
            description: product.description,
            photo: product.photo,
            price: product.price,
            quantity: product.quantity
        }
        return res.status(201).send(resProduct)
    }
    catch (err){
        console.log("Error while INSERTING the Product", err)
        res.status(500).send({
            message: "Error while INSERTING the Product",
        })
    }
}

const updateProduct = async() => {
    try {
        const {title, description, photo, price, quantity} = req.body

        const product = await productModel.create({
            title,
            description,
            photo,
            price,
            quantity
        })

        const resProduct = {
            title: product.title,
            description: product.description,
            photo: product.photo,
            price: product.price,
            quantity: product.quantity
        }
        return res.status(201).send(resProduct)
    }
    catch (err){
        console.log("Error while UPDATING the Product", err)
        return res.status(500).json({
            message: "Error while UPDATING IN the Product",
        })
    }
}

const getProductDetails = async(req, res) => {
    const { productId } = req.params

    try{
        const product = await productModel.findOne({ _Id: productId })
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }

        const {
            title, 
            description,
            photo,
            price,
            quantity,
            rating,
            reviews
        } =product

        const resProduct = {
            title,
            description,
            photo,
            price,
            quantity,
            rating,
            reviews
        }

        return res.status(200).json({ product: resProduct })
    }
    catch (err){
        console.log("Error while GATHERING the Product Details", err)
        res.status(500).send({
            message: "Error while GATHERING the Product Details",
        })
    }
}

const deleteProduct = async() => {
    const { productId } = req.params

    try {
        const product = await productModel.findByIdAndDelete(productId)

        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        res.status(200).json({ message: "Product deleted successfully" })
    }
    catch (err){
        console.log("Error while DELETING the Product", err)
        res.status(500).send({
            message: "Error while DELETING the Product",
        })
    }
}