const {Schema, model} = require("mongoose");

const Type = new Schema({
    img: {type: String, required: true},
    title: {type: String, unique: true, required: true},
    items: [{type: Schema.Types.ObjectId, ref: "Item"}],
    created: {type: Date, default: Date.now},
    updated: {type: Date}
})

module.exports = model("Type", Type);