import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import sellerModel from "./sellerModel.js"

const registerSeller = async (req, res) => {
    try {
        const { name, shopName, email, password, phoneNumber, location, category } = req.body

        const existingSeller = await sellerModel.findOne({ email })
        if (existingSeller) {
            return res.status(409).json({ message: "Seller already exists" })
        }

        // Hash the password asynchronously
        const hashedPassword = await bcrypt.hash(password, 10)

        const seller = await sellerModel.create({
            name,
            shopName,
            email,
            password: hashedPassword,
            phoneNumber,
            location,
            category
        })

        const resSeller = {
            name: seller.name,
            email: seller.email,
            phoneNumber: seller.phoneNumber,
            location: seller.location,
            category: seller.category,
        }

        return res.status(201).send(resSeller)
    } catch (err) {
        console.log("Error while REGISTERING the Seller", err)
        res.status(500).send({
            message: "Error while REGISTERING the Seller",
        })
    }
}

const loginSeller = async (req, res) => {
    try {
        const { email, password } = req.body

        // Check if the seller exists by email
        const seller = await sellerModel.findOne({ email })
        if (!seller) {
            return res.status(404).json({ message: "Seller not found" })
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(
            password,
            seller.password
        )
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" })
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                sellerId: seller._id,
                email: seller.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        // Send response with the token and seller details (excluding the password, cauz its sensitive shhhh....)
        const resSeller = {
            name: seller.name,
            email: seller.email,
            phoneNumber: seller.phoneNumber,
            token,
        }

        return res.status(200).json(resSeller)
    } catch (err) {
        console.error("Error while LOGGING IN the Seller", err)
        return res.status(500).json({
            message: "Error while LOGGING IN the Seller",
        })
    }
}

export { registerSeller, loginSeller }
