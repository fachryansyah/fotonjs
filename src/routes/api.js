import Express from "express";
import SampleRoute from "./Api/SampleRoute";
const app = Express();

app.use("/sample", SampleRoute);

export default app;
