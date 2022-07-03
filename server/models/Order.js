const {Schema, model} = require("mongoose");

const Order = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    items: [
        {itemId: {type: Schema.Types.ObjectId, ref: "Item"}, 
        quantity: {type: Number, default: 1}}
        ],
    amount: {type: Number, default: 0},
    status: {type: String, default: "pending"},
    created: {type: Date, default: Date.now},
    updated: {type: Date},
})

module.exports = model("Order", Order);