const {Schema, model} = require("mongoose");

const Basket = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    items: [{itemId: {type: Schema.Types.ObjectId, ref: "Item"},
    quantity: {type: Number, default: 1}}],
})

module.exports = model("Basket", Basket);