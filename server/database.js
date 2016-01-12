var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/drive1');

module.exports = mongoose.connection;