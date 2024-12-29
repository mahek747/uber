const mongoose = require("mongoose");
require("dotenv").config(); // Make sure dotenv is loaded

const connectDB = () => {
  mongoose
    .connect(`${process.env.DB_CONNECT}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error.message);
      process.exit(1);
    });
};

module.exports = connectDB;
