var Falcor = require('falcor');
var FalcorDataSource = require('falcor-http-datasource');

var model = new Falcor.Model({
    source: new FalcorDataSource('/navigation/model.json')
});

module.exports = model;