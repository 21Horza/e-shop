const Item = require("../models/Item");
const Type = require("../models/Type");

class ItemService {
    async create(req, res) {
        const {name, img, description, price, type, inStock, size, color} = req.body

        const itemExists = await Item.findOne({name})

        if(itemExists) {
            throw new Error(`Item ${name} already exists`);
        }

        const typeExists = await Type.findOne({title: type})

        if(!typeExists) {
            throw new Error(`Type ${type} doesn't exists`);
        }

        const createdItem = await Item.create({name, img, description, price, type: typeExists, inStock, size, color})

        await Type.findOneAndUpdate({title: type}, { $push: {items: createdItem}}, {new: true})

        return createdItem.populate("type", "title") // avoid returning the whole list of items in Type
    }
    
    async delete(req, res) {
        const itemId = req.params.itemId
        const {type} = req.body

        const item = await Item.findByIdAndDelete({_id: itemId})

        if(!item) {
            throw new Error(`Item with id: ${itemId} not found`)
        }

        await Type.findOneAndUpdate({title: type}, {$pull: {items: itemId}}, {new: true})

        return item
    }
    
    async update(req, res) {
        const itemId = req.params.itemId
        const {name, img, description, price, type, inStock, size, color} = req.body

        const item = await Item.findByIdAndUpdate({_id: itemId}, {name, img, description, price, type, inStock, size, color, updated: Date.now()})

        return item
    }

    async getOne(req, res) {
        const itemId = req.params.itemId 

        const item = await Item.findById({_id: itemId})

        return item
    }

    async getAll(req, res) {
        const type = req.query.type

        let items

        if(type) {
            const foundType = await Type.findOne({title: type})
            items = await Item.find({
                type: foundType
            });
        } else {
            items = await Item.find();
        }

        return items
    }
}

module.exports = new ItemService();