var express        = require('express');
var morgan 	       = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var mysql 		   = require('mysql');
var config		   = require('./config.js');

var app 		   = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(methodOverride());
app.use(cookieParser());
app.use(expressSession({ resave: true ,secret: '123456' , saveUninitialized: true}));


var mysql_connection = mysql.createConnection({

  host     : config.mysql_host,
  user     : config.mysql_username,
  password : config.mysql_password,
  database : config.mysql_database

});

mysql_connection.connect(function(err) {

  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log("Mysql Connecttion established!");

});


mongoose.connect(config.mongo_database,function(err) {

	if (!err) {

		console.log("MongoDB Connecttion established!");
	
		} else {

		console.log(err);
	}

});

app.listen(config.port,function(err){

	if (!err) {
		console.log("server running...");
	}

});
