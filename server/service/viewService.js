const Item = require("../models/Item");

class ViewService {
    async increaseView(req, res) { 
        const itemId = req.params.id
        
        const item = await Item.findOneAndUpdate({_id: itemId}, {$inc: {views: 1}}, {new: true})

        if(!item) {
            throw new Error(`Item with id: ${itemId} not found`)
        }

        return item
    }
}

module.exports = new ViewService();