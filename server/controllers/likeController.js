const likeService = require("../service/likeService");

class LikeController {
    async like(req, res) {
        try {
            const likes = await likeService.like(req, res)
            return res.status(200).json(likes)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async dislike(req, res) {
        try {
            const likes = await likeService.dislike(req, res)
            return res.status(200).json(likes)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

}

module.exports = new LikeController();