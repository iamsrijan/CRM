const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone_number: {
    type: Number
  },
  picture: {
    type: String
  }
},{
    collection: 'customer'
});

module.exports = mongoose.model('Customer', Customer);