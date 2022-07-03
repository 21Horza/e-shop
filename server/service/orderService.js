const Order = require("../models/Order");
const User = require("../models/User");


class OrderService {
    async create(req, res) {
        const userId = req.user.id
        const {items, amount} = req.body
        
        const orderExists = await Order.findOne({user: userId})

        if(!orderExists) {
            const order = await Order.create({user: userId, items, amount})
            return order
        }

        return orderExists
    }
    
    async update(req, res) {
        const userId = req.user.id
        const {items, amount} = req.body

        const orderExists = await Order.findOneAndUpdate({user: userId}, {$set: {items, amount}}, {new: true})

        if(!orderExists) {
            throw new Error("Order not found")
        }

        return orderExists 
    }
    
    async delete(req, res) {
        const userId = req.user.id

        const orderExists = await Order.findOneAndDelete({user: userId})

        if(!orderExists) {
            throw new Error("Order not found")
        }

        return orderExists 
    }

    async getAllOrders() {
        const orders = await Order.find()
        return orders
    }
    
}

module.exports = new OrderService();