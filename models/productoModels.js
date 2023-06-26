const mongoose = require('mongoose')
const productShema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
})
module.exports = mongoose.model('product', productShema)
