import express from "express";
import { trainInfo } from "../controllers/train-controller.js";
import { bookTicket } from "../controllers/train-controller.js";
import { checkAvailability } from "../controllers/train-controller.js";

const trainRouter = express();

trainRouter.get("/:from/:to", trainInfo);
trainRouter.get("/:from/:to/:trainno/:class/:date", checkAvailability);
trainRouter.post("/book", bookTicket);

export default trainRouter;