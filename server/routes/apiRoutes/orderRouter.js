const orderController = require("../../controllers/orderController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const orderRouter = require("express").Router();

orderRouter.post("/create",roleMiddleware(["USER"]), authMiddleware, orderController.create);
orderRouter.delete("/delete", roleMiddleware(["USER"]), authMiddleware, orderController.delete);
orderRouter.put("/update", roleMiddleware(["USER"]), authMiddleware, orderController.update);
orderRouter.get("/", roleMiddleware(["ADMIN"]), authMiddleware, orderController.getAll);


module.exports = orderRouter;