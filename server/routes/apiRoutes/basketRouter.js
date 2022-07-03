const basketController = require("../../controllers/basketController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const basketRouter = require("express").Router();

basketRouter.post("/update", roleMiddleware(["USER"]), authMiddleware, basketController.updateBasket); 
basketRouter.post("/empty", roleMiddleware(["USER"]), authMiddleware, basketController.emptyBasket); 
basketRouter.get("/get",  roleMiddleware(["USER"]), authMiddleware, basketController.getBasket); 

module.exports = basketRouter;