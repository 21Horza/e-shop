const Basket = require("../models/Basket");

class BasketService {
    async updateUserBasket(req, res) {
        const items = req.body.items
        const userId = req.user.id
        
        const basket = await Basket.findOneAndUpdate({user: userId}, {$set: {items: items}}, {new: true})

        return basket
    }
    
    async emptyBasket(req, res) {
        const userId = req.user.id
        
        const basket = await Basket.findOneAndUpdate({user: userId}, {$set: {items: []}}, {new: true})
        
        return basket
    }
    
    async getUserBasket(req, res) {
        const userId = req.user.id
        
        const basket = await Basket.findOne({user: userId})
        
        return basket
    }
}

module.exports = new BasketService();