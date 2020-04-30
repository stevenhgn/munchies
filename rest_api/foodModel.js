
// foodModel.js
var mongoose = require("mongoose");
// Setup schema
var foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price : Number,
  price_range: Number, // 1, 2 or 3
  image: String,
  create_date: {
    type: Date,
    default: Date.now
  },
});
// Export Contact model
var Food = (module.exports = mongoose.model("food", foodSchema));
module.exports.get = function(callback, limit) {
  Food.find(callback).limit(limit);
};
