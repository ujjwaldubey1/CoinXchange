import express from "express"
import {
    registerCustomer,
    loginCustomer,
    getCustomerDetails,
    getCustomerTransactions,
    getCustomerSingleTransaction,
    updateCustomerDetails,
    deleteCustomer,
} from "./customerController.js"

const customerRouter = express.Router()

// ----- AUTH
customerRouter.post("/register", registerCustomer)
customerRouter.post("/login", loginCustomer)

// ----- DETAILS
customerRouter.get("/:customerId/details", getCustomerDetails)
customerRouter.put("/:customerId/details/update", updateCustomerDetails)
customerRouter.delete("/:customerId", deleteCustomer)

// ----- TRANSACTOINS
customerRouter.get("/:customerId/transactions", getCustomerTransactions)
customerRouter.get(
    "/:customerId/transactions/:transactionId",
    getCustomerSingleTransaction
)

export default customerRouter
