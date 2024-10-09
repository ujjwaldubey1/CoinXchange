import express from "express"
import cors from "cors"
import { config } from "./config/config.js"
import customerRouter from "./customer/customerRouter.js"

const app = express()

app.use(
    cors({
        origin: config.frontendDomain,
    })
)
app.use(express.json())

app.get("/", (req, res) => {
    return res.json({
        message: "Welcome To CoinXchange",
    })
})

app.use("/api/customer", customerRouter)
app.use("/api/auth/customer", customerRouter)

export default app
