import { config } from "./src/config/config.js"
import app from "./src/app.js"

const startServer = async () => {
    const port = config.port || 5500

    app.listen(port, () => {
        console.log(`Sever started on PORT: ${port}`)
    })
}

startServer()
