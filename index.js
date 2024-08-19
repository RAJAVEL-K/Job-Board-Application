import express from "express";
import mongoose from "mongoose";
import { router } from "./router.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5070);

mongoose
  .connect(
    "mongodb+srv://kumarajavel:yBmtWOvdiXmLjBf4@projectjob.qya058x.mongodb.net/?retryWrites=true&w=majority&appName=ProjectJob",{dbName:"JobPlan"}
  )
  .then(() => console.log("Server connected with mongoDB"));

app.use("/", router);
