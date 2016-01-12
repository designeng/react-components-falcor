var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    login: { type: String, required: true, unique: true }
});

var User = mongoose.model('User', userSchema);

module.exports = User;