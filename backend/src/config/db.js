const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      dbName: process.env.DB_NAME,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`DB connected : ${process.env.DB}`);
  } catch (error) {
    console.log(`DB connect Error : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
