const {Schema, model} = require("mongoose");

const Item = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    inStock: {type: Boolean, default: true},
    size: {type: Array},
    color: {type: Array},
    likes: {type: Array},
    views: {type: Number, default: 0},
    type: {type: Schema.Types.ObjectId, ref: "Type"},
    created: {type: Date, default: Date.now},
    updated: {type: Date}
})

module.exports = model("Item", Item);