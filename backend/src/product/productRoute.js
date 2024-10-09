import express from "express"
import { createProduct, updateProduct, deleteProduct} from "./productController.js"

const productRoute = express.Router()

productRoute.post("/create", createProduct)
productRoute.post("/update", updateProduct)
productRoute.post("/detail", getProductDetails)
productRoute.post("/delete", deleteProduct)

export default productRoute
