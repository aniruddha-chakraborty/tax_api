var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var VatPurchaseDataSchema = new Schema({

	shop_id: String,
	shop_name: String,
	vat_id: String,
	total_purchase: Number,
	vat_percent: Number,
	vat: Number,
	date: Date

});