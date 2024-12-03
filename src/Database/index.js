const mongoose = require("mongoose");

const Databasebconncet = async () => {
  try {
    const databaseInstance = await mongoose.connect(process.env.DATABASE_URL);
    if (databaseInstance) {
      console.log("Database connection successful");
    }
  } catch (error) {
    console.log("Error form mongodb", error);
  }
};

module.exports = { Databasebconncet };
