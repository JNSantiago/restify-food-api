const mongoose = require('mongoose')
const mongooseStringQuery = require('mongoose-string-query')
const timestamps = require('mongoose-timestamp')

const MenuItemSchema = {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    }
}

const MenuItem = mongoose.model('MenuItem', MenuItemSchema)
module.exports = [
    MenuItem,
    MenuItemSchema
]