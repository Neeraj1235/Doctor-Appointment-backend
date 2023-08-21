const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.MONGO_URL;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((err) => {
    console.log(err);
  });
