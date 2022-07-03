const typeController = require("../../controllers/typeController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const typeRouter = require("express").Router();

typeRouter.post("/create", roleMiddleware(["ADMIN"]), authMiddleware, typeController.create);
typeRouter.delete("/delete/:typeId", roleMiddleware(["ADMIN"]), authMiddleware, typeController.delete);
typeRouter.get("/:typeId", roleMiddleware(["ADMIN"]), authMiddleware, typeController.getOne);
typeRouter.get("/", roleMiddleware(["ADMIN"]), authMiddleware, typeController.getAll);

module.exports = typeRouter;