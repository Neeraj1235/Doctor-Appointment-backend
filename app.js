const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const doctorRouter = require("./routes/doctor");
const patientRouter = require("./routes/patient");
const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/doctor", doctorRouter);
app.use("/patient", patientRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server start at port no : ${PORT}`);
});
