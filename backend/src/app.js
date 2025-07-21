const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error-handler.middleware");

dotenv.config();
connectDB();

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
);

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);
module.exports = app;
