import express from "express"
import {
    registerCustomer,
    loginCustomer,
    getCustomerDetails,
} from "./customerController.js"

const customerRouter = express.Router()

// ----- AUTH
customerRouter.post("/register", registerCustomer)
customerRouter.post("/login", loginCustomer)

// ----- DETAILS
customerRouter.get("/:customerId/details", getCustomerDetails)

export default customerRouter
