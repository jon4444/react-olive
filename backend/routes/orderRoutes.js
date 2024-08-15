import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder } from "../models/orderControllers.js";
// import orderControllers from "../models/orderControllers.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

export default orderRouter;