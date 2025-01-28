require("dotenv").config();
const { Databasebconncet } = require("./src/Database/index.js");
const { app } = require("./app.js");

Databasebconncet()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("From index.js database conncetion error", err);
  });
