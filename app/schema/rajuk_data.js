var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var RajukDataSchema = new Schema({

	nid: String,
	jid: String;,
	info: String,
	price: Number,
	time: Date.now(),
	date: Date

});