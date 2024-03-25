import express from "express";
import dotenv from "dotenv";
import { DataBase } from "./src/db/db.js";
import { User } from "./src/models/models.js";

dotenv.config();

const app = express();

app.use(express.json());

const start = async () => {
  await DataBase.authenticate();
  await DataBase.sync();
  await app.listen(process.env.PORT, () =>
    console.log(`Server start on port ${process.env.PORT}`),
  );
};

start();
