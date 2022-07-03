const likeController = require("../../controllers/likeController");
const roleMiddleware = require("../../middlewares/roleMiddleware");
const authMiddleware = require("../../middlewares/authMiddleware");

const likeRouter = require("express").Router();

likeRouter.post("/like/:id", roleMiddleware(["USER"]), authMiddleware, likeController.like); // itemId
likeRouter.delete("/dislike/:id", roleMiddleware(["USER"]), authMiddleware, likeController.dislike ); // itemId

module.exports = likeRouter;