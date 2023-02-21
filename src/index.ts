import express from "express";
import cors from "cors";
import { mongoDB } from "./database";
import dotenv from "dotenv";
import routes from "./routes";
import handleError from "./middlewares/handleError";



dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use("/", routes)
app.use(handleError)


app.listen(process.env.PORT || 5000, () => {
    console.log('Server started')

    mongoDB.createConnection()

})

export default app