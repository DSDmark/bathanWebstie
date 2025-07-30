import { connectDB } from "@/config/index.js"
import { errorHandler } from "@/middlewares/index.js"
import routes from "@/routes/index.js"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"

dotenv.config()
connectDB()

const app = express()

app.use(
  cors({
    origin: "*",
    exposedHeaders: ["token"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "token",
    ],
  })
)

app.use(express.json())
app.use("/api/v1", routes)
app.use(errorHandler)

export default app
