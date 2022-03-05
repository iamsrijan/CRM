const express = require('express');
const app = express();
const Routes = express.Router();


let Customer = require('../model/Customer');

// api to add customer
Routes.route('/addcustomer').post(function (req, res) {
  let customer = new Customer(req.body);
  customer.save()
  .then(customer => {
    res.status(200).json({'status': 'success','mssg': 'customer added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get customers
Routes.route('/').get(function (req, res) {
  Customer.find(function (err, customers){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','customers': customers});
    }
  });
});

// api to edit customer
Routes.route('/editcustomer/:id').get(function (req, res) {
  let id = req.params.id;
  Customer.findById(id, function (err, customer){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','customer': customer});
    }
  });
});

// api to update route
Routes.route('/updatecustomer/:id').post(function (req, res) {
    Customer.findById(req.params.id, function(err, customer) {
    if (!customer){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        customer.name = req.body.name;
        customer.email = req.body.email;
        customer.phone_number = req.body.phone_number;

        customer.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api to delete customer
Routes.route('/deletecustomer/:id').get(function (req, res) {
  Customer.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Deleted successfully'});
    }
  });
});




module.exports = Routes;