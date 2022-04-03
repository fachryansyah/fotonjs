import Express from "express";
import SampleController from "../../app/Http/Controllers/SampleController";

const Router = Express.Router();
Router.get("/hello", SampleController.index);

export default Router;
