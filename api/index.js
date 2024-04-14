import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv"

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`MongoDB is Connected`.bgMagenta.white);
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`.bgCyan.white);
});
