import express from "express";
import mongoose from "mongoose";
{
  /*  phd0xxVfFa39Lijh  */
}

const app = express();
mongoose
  .connect(
    "mongodb+srv://kumarajavel:phd0xxVfFa39Lijh @authentication.w4myhcn.mongodb.net/?retryWrites=true&w=majority&appName=Authentication",
    { dbName: "aurth" }
  )
  .then(() => console.log("connect db"));
