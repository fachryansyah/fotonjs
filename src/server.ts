import express, { Express } from "express";
import RouteApi from "./routes/api";
import BodyParser from "body-parser";
import Dotenv from "dotenv";
Dotenv.config();

const app: Express = express();
const port = process.env.PORT || process.env.APP_PORT || 1337;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use("/api", RouteApi);

app.listen(port, () =>
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);

export default app;
