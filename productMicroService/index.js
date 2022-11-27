import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import ApiRoutes from "./src/routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

// mongoose.Promise = global.Promise;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("Cannot connect to db :: ", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", ApiRoutes);

const PORT = process.env.NODE_DOCKER_PORT;

app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}`);
});
