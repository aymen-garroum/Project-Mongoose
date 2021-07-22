// DB CONNECTION FUNCTION EXPORTED TO SERVER.JS, PARAMETERS ARE IMPORTED FROM .ENV

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Data base connected");
  } catch (error) {
    console.log("Data base connection failed");
  }
};

module.exports = connectDB;