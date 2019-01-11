const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const RestaurantSchema = new mongoose.Schema(
	{
		name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
)

RestaurantSchema.plugin(timestamps);
RestaurantSchema.plugin(mongooseStringQuery);

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant; 