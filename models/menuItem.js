const mongoose = require('mongoose')
const mongooseStringQuery = require('mongoose-string-query')
const timestamps = require('mongoose-timestamp')

const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    }
})

MenuItemSchema.plugin(timestamps)
MenuItemSchema.plugin(mongooseStringQuery)

const MenuItem = mongoose.model('MenuItem', MenuItemSchema)
module.exports = MenuItem