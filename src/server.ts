import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import { config } from "../config/config";
import { createServer } from "http";
import mongoose from "mongoose";

const app = express();
const PORT = config.port || "4000";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world!");
});

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("connected to mongodb at uri:", config.mongoUri);
  })
  .catch((e) => {
    console.log("error connecting to mongodb:", e);
  });

const setupServer = () => {
  return new Promise<void>((resolve) => {
    const server = createServer(app);
    server.listen(PORT, () => {
      resolve();
      console.log("listening at port: ", PORT);
    });
  });
};

setupServer();
