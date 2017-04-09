var mongoose = require('mongoose');
mongoose.connect('mongodb://110219011:110219011@ds157040.mlab.com:57040/hw6');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
	age: Number,
    sex: String,
    like: Number
});
module.exports = mongoose.model('Form', personSchema);