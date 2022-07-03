const basketService = require("../service/basketService");

class BasketItemController {
    async updateBasket(req, res) {
        try {
            const basket = await basketService.updateUserBasket(req, res)
            return res.status(200).json(basket)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async emptyBasket(req, res) {
        try {
            const basket = await basketService.emptyBasket(req, res)
            return res.status(200).json(basket)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getBasket(req, res) {
        try {
            const basket = await basketService.getUserBasket(req, res)
            return res.status(200).json(basket)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

}

module.exports = new BasketItemController();