const itemService = require("../service/itemService");

class ItemController {
    async create(req, res) {
        try {
            const createdItem = await itemService.create(req, res)
            return res.status(200).json({message: "Item created", createdItem})
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async delete(req, res) {
        try {
            const item = await itemService.delete(req, res)
            return res.status(200).json({message: "Item deleted", item})
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async update(req, res) {
        try {
            const updatedItem = await itemService.update(req, res);
            return res.status(200).json(updatedItem)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getOne(req, res) {
        try {
            const item = await itemService.getOne(req, res);
            return res.status(200).json(item)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getAll(req, res) {
        try {
            const items = await itemService.getAll(req, res);
            return res.status(200).json(items)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new ItemController();