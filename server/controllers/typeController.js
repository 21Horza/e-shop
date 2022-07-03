const typeService = require("../service/typeService");

class TypeController {
    async create(req, res) {
        try {
            const type = await typeService.create(req, res);
            return res.status(200).json(type)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async delete(req, res) {
        try {
            const type = await typeService.delete(req, res);
            return res.status(200).json(type)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getOne(req, res) {
        try {
            const type = await typeService.getOne(req, res);
            return res.status(200).json(type)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

    async getAll(req, res) {
        try {
            const types = await typeService.getAll(req, res)
            return res.status(200).json(types)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }
}

module.exports = new TypeController();