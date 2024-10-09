import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import customerModel from "./customerModel.js"
import transactionModel from "../transaction/transactionModel.js"

const registerCustomer = async (req, res) => {
    try {
        const { name, email, password, phoneNumber, gender } = req.body

        const existingCustomer = await customerModel.findOne({ email })
        if (existingCustomer) {
            return res.status(409).json({ message: "Customer already exists" })
        }

        // Hash the password asynchronously
        const hashedPassword = await bcrypt.hash(password, 10)

        const customer = await customerModel.create({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            gender,
        })

        const rescustomer = {
            name: customer.name,
            email: customer.email,
            phoneNumber: customer.phoneNumber,
            gender,
        }

        return res.status(201).send(rescustomer)
    } catch (err) {
        console.log("Error while REGISTERING the customer", err)
        res.status(500).send({
            message: "Error while REGISTERING the customer",
        })
    }
}

const loginCustomer = async (req, res) => {
    try {
        const { email, password } = req.body

        // Check if the customer exists by email
        const customer = await customerModel.findOne({ email })
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" })
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(
            password,
            customer.password
        )
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" })
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                customerId: customer._id,
                email: customer.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        const resCustomer = {
            name: customer.name,
            email: customer.email,
            phoneNumber: customer.phoneNumber,
            token,
        }

        return res.status(200).json(resCustomer)
    } catch (err) {
        console.error("Error while LOGGING IN the Customer", err)
        return res.status(500).json({
            message: "Error while LOGGING IN the Customer",
        })
    }
}

const getCustomerDetails = async (req, res) => {
    const { customerId } = req.params

    try {
        const customer = await customerModel.findOne({ _id: customerId })

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" })
        }

        const {
            name,
            email,
            password,
            phoneNumber,
            gender,
            transactions,
            favorites,
        } = customer

        const resCustomer = {
            name,
            email,
            password,
            phoneNumber,
            gender,
            transactions,
            favorites,
        }

        return res.status(200).json(resCustomer)
    } catch (err) {
        console.error("Error while FETCHING Customer Details", err)
        return res.status(500).json({
            message: "Error while FETCHING Customer Details",
        })
    }
}

const updateCustomerDetails = async (req, res) => {
    const { customerId } = req.params
    const { name, email, password, phoneNumber, gender } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const customer = await customerModel.findByIdAndUpdate(
            customerId,
            { name, email, password: hashedPassword, phoneNumber, gender },
            { new: true, runValidators: true }
        )

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" })
        }

        return res.status(200).json(customer)
    } catch (err) {
        console.error("Error while UPDATING Customer Details", err)
        return res.status(500).json({
            message: "Error while UPDATING Customer Details",
        })
    }
}

const deleteCustomer = async (req, res) => {
    const { customerId } = req.params

    try {
        const customer = await customerModel.findByIdAndDelete(customerId)

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" })
        }

        res.status(200).json({ message: "Customer deleted successfully" })
    } catch (err) {
        console.error("Error while DELETING Customer Details", err)
        return res.status(500).json({
            message: "Error while DELETING Customer Details",
        })
    }
}

const getCustomerTransactions = async (req, res) => {
    const { customerId } = req.params

    try {
        const customer = await customerModel.find({ _id: customerId })

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" })
        }

        const transactions = await transactionModel.find({ sender: customerId })

        return res.status(200).json(transactions)
    } catch (err) {
        console.error("Error while FETCHING Customer Transaction", err)
        return res.status(500).json({
            message: "Error while FETCHING Customer Transaction",
        })
    }
}

const getCustomerSingleTransaction = async (req, res) => {
    const { customerId, transactionId } = req.params

    try {
        const customer = await transactionModel.findOne({ _id: customerId })

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" })
        }

        const transaction = transactionModel.findOne({ _id: transactionId })

        return res.status(200).json(transaction)
    } catch (err) {
        console.error("Error while FETCHING Customer Transaction", err)
        return res.status(500).json({
            message: "Error while FETCHING Customer Transaction",
        })
    }
}

export {
    registerCustomer,
    loginCustomer,
    getCustomerDetails,
    getCustomerTransactions,
    getCustomerSingleTransaction,
    updateCustomerDetails,
    deleteCustomer,
}
