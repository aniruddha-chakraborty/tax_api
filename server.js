var express        = require('express');
var morgan 	       = require('morgan');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var mysql 		   = require('mysql');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(methodOverride());
app.use(cookieParser());
app.use(expressSession({ resave: true ,secret: '123456' , saveUninitialized: true}));
app.use(errorHandler());


var mysql_connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tax'

});


mongoose.connect(config.database,function(err) {

	if (!err) {

		console.log("Connecttion established!");
	
		} else {

		console.log(err);
	}

});
