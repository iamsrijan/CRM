const express = require('express');
const app = express();
const Routes = express.Router();


let Employee = require('../model/Employee');


// api to add employee
Routes.route('/addemployee').post(function (req, res) {
  let employee = new Employee(req.body);
  employee.save()
  .then(employee => {
    res.status(200).json({'status': 'success','mssg': 'employee added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get employees
Routes.route('/').get(function (req, res) {
  Employee.find(function (err, employees){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','employees': employees});
    }
  });
});

// api to edit employees
Routes.route('/editemployee/:id').get(function (req, res) {
  let id = req.params.id;
  Employee.findById(id, function (err, employee){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','customer': employee});
    }
  });
});

// api to update route
Routes.route('/updateemployee/:id').post(function (req, res) {
    Employee.findById(req.params.id, function(err, employee) {
    if (!employee){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        employee.name = req.body.name;
        employee.title = req.body.title;
        employee.email = req.body.email;
        employee.phone_number = req.body.phone_number;

        employee.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api to delete employee
Routes.route('/deleteemployee/:id').get(function (req, res) {
  Employee.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Deleted successfully'});
    }
  });
});

module.exports = Routes;