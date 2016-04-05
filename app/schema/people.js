var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var PeopleSchema = new Schema({

		name: String,
		father_name: String,
		father_id: String, // this string is an object id of father of this human
		mother_name: String,
		mother_name: String,


});