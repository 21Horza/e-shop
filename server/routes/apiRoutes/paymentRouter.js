const paymentController = require("../../controllers/paymentController");
const authMiddleware = require("../../middlewares/authMiddleware");

const paymentRouter = require("express").Router();

paymentRouter.post("/payment", authMiddleware, paymentController.pay);  

module.exports = paymentRouter;