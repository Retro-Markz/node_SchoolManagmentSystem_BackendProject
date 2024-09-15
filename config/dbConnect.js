const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/test";
const dbConnect = async () => {
  try {
    await mongoose.connect(URL);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection Failed", error.message);
  }
};

dbConnect();
