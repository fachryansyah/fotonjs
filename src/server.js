require("dotenv").config();
import Express from "express";
import RouteApi from "./routes/api";
import BodyParser from "body-parser";

const app = Express();
const port = process.env.PORT || process.env.APP_PORT || 1337;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use("/api", RouteApi);

app.listen(port, () => console.log(`Backend started on port ${port}`));

export default app;
