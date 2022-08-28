import express, { Express } from "express";
import SampleRoute from "./Api/SampleRoute";
const app: Express = express();

app.use("/sample", SampleRoute);

export default app;
