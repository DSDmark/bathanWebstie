const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes/auth");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));

app.use(express.json());
app.use("/api", routes);

module.exports = app;
