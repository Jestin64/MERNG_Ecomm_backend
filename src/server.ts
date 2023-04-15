import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import { config } from "../config/config";
import { createServer } from "http";

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
