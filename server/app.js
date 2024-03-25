import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const start = async () => {
  await app.listen(process.env.PORT, () =>
    console.log(`Server start on port ${process.env.PORT}`),
  );
};

start();
