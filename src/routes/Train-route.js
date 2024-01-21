import express from "express";
import { trainInfo } from "../controllers/train-controller.js";
import { bookTicket } from "../controllers/train-controller.js";

const trainRouter = express();

trainRouter.get("/:from/:to", trainInfo);
trainRouter.post("/:from/:to/:trainno", bookTicket);

export default trainRouter;