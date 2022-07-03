const orderService = require("../service/orderService");

class OrderController {
    async create(req, res) {
        try {
            const order = await orderService.create(req, res)
            return res.status(200).json(order)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async update(req, res) {
        try {
            const order = await orderService.update(req, res)
            return res.status(200).json(order)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async delete(req, res) {
        try {
            const order = await orderService.delete(req, res)
            return res.status(200).json(order)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getAll(req, res) {
        try {
            const orders = await orderService.getAllOrders()
            return res.status(200).json(orders)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new OrderController();