const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
  name: {
    type: String
  },
  title: {
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
    collection: 'employee'
});

module.exports = mongoose.model('Employee', Employee);