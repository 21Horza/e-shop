const Item = require("../models/Item");
const User = require("../models/User");
const jwt = require('jsonwebtoken');

class LikeService {
    async like(req, res) {
       const itemId = req.params.id
       const userId = req.user.id

       const item = await Item.findById({_id: itemId})

       const foundUser = item.likes.find((item) => item === userId);

       if (!foundUser) {
        item.likes.push(userId);
        await item.save();
        return item.likes.length;
        } else {
            throw new Error('You already liked the post')
        }
    }
    
    async dislike(req, res) { 
        const itemId = req.params.id
        const userId = req.user.id

        const item = await Item.findById({_id: itemId})
 
        const foundUser = item.likes.find((item) => item === userId);

        if (foundUser) {
         item.likes.splice(item.likes.indexOf(userId), 1);
         await item.save();
         return item.likes.length;
         } else {
             throw new Error('You already disliked the post')
         } 
    }
}

module.exports = new LikeService();