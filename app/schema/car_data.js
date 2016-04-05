var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var CarDataSchema = new Schema({

	nid: String,
	car_model: String,
	price: Number,
	buy_date: Date,
	number_plate: String,
	car_tax: Number,
	car_vat: Number

});