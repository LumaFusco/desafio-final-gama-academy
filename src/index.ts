import express from "express"
import cors from "cors"
// import Connection from "./database/Connection"
import { mongoDB } from "./database"
import dotenv from "dotenv"
import routes from "./routes"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use("/", routes)

app.listen(process.env.PORT || 5000, () => {
    console.log('Server started')

    mongoDB.createConnection()

})

export default app