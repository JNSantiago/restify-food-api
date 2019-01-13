const mongoose = require('mongoose')
const mongooseStringQuery = require('mongoose-string-query')
const timestamps = require('mongoose-timestamp')

const MenuItem = require('./menuItem')

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    menu: {
        type: [MenuItem],
        required: false,
        select: false,
        default: []
    }
})

RestaurantSchema.plugin(timestamps)
RestaurantSchema.plugin(mongooseStringQuery)

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
module.exports = Restaurant
