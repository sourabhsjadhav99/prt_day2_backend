const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
let url ="mongodb://localhost:27017/api_web_tech_assignment"
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.log(`Error connecting to the database. n${err}`);
  });
