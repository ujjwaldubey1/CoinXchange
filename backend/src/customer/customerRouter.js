import express from "express"
import {
    registerCustomer,
    loginCustomer,
    getCustomerDetails,
    getCustomerTransactions,
    getCustomerSingleTransaction,
} from "./customerController.js"

const customerRouter = express.Router()

// ----- AUTH
customerRouter.post("/register", registerCustomer)
customerRouter.post("/login", loginCustomer)

// ----- DETAILS
customerRouter.get("/:customerId/details", getCustomerDetails)

// ----- TRANSACTOINS
customerRouter.get("/:customerId/transactions", getCustomerTransactions)
customerRouter.get(
    "/:customerId/transactions/:transactionId",
    getCustomerSingleTransaction
)

export default customerRouter
