import express from "express"
import {
    registerSeller,
    loginSeller,
    getSellerDetails,
    updateSellerDetails,
    deleteSeller,
    getSellerTransactions,
    getSellerSingleTransaction,
} from "./sellerController.js"

const sellerRouter = express.Router()

// ----- AUTH
sellerRouter.post("/register", registerSeller)
sellerRouter.post("/login", loginSeller)

// ----- DETAILS
sellerRouter.get("/:sellerId/details", getSellerDetails)
sellerRouter.put("/:sellerId/details/update", updateSellerDetails)
sellerRouter.delete("/:sellerId", deleteSeller)

// ----- TRANSACTOINS
sellerRouter.get("/:sellerId/transactions", getSellerTransactions)
sellerRouter.get(
    "/:sellerId/transactions/:transactionId",
    getSellerSingleTransaction
)

export default sellerRouter
