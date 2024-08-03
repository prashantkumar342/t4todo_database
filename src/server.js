import dotenv from "dotenv";
import express from "express";
import routes from './routes/index.js'
import dbConnect from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import bodyParser from "body-parser";
const app = express()


dotenv.config({ path: "../.env" })
dbConnect(process.env.DB_URI, process.env.DB_NAME)
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors({
  origin: process.env.APP_URI,
  credentials: true,
}))

const port = process.env.PORT || 8980
app.use('/api/v1', routes)


app.listen(port, () => {
  console.log(`Server started at ${port}`)
})
