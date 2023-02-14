import express from "express"
import cors from "cors"
import Connection from "./database/Connection"
import dotenv from "dotenv"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 5000, () => {
    console.log('Server started')

})

export default app