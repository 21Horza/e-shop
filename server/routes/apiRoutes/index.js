const router = require("express").Router();

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const itemRouter = require("./itemRouter");
const likeRouter = require("./likeRouter");
const orderRouter = require("./orderRouter");
const viewRouter = require("./viewRouter");
const basketRouter = require("./basketRouter");

router.use("/users", userRouter)
router.use("/types", typeRouter)
router.use("/items", itemRouter)
router.use("/baskets", basketRouter)
router.use("/likes", likeRouter)
router.use("/orders", orderRouter)
router.use("/views", viewRouter)

module.exports = router;