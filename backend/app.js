var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

const customerRoute = require('./routes/customer.route');
const employeeRoute = require('./routes/employee.route');


var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/customer', customerRoute);
app.use('/employee', employeeRoute);

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});