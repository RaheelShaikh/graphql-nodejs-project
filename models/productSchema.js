const mongoose = require('mongoose');

const productsListSchema = new mongoose.Schema({
    category: String,
    productName: String,
    price: Number,
    colors: Object,
    imgPath: String,
})

module.exports = mongoose.model('productlists', productsListSchema);
