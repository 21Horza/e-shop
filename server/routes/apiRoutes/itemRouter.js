const itemController = require("../../controllers/itemController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const itemRouter = require("express").Router();

itemRouter.post("/create", roleMiddleware(["ADMIN"]), authMiddleware, itemController.create);
itemRouter.delete("/delete/:itemId", roleMiddleware(["ADMIN"]), authMiddleware, itemController.delete);
itemRouter.put("/update/:itemId", roleMiddleware(["ADMIN"]), authMiddleware, itemController.update);
itemRouter.get("/:itemId", itemController.getOne);
itemRouter.get("/", itemController.getAll);

module.exports = itemRouter;