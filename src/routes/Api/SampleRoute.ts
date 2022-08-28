import express, { Router } from "express";
import SampleController from "../../app/Http/Controllers/SampleController";

const router: Router = express.Router();
router.get("/hello", SampleController.index);

export default router;
