var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var FalcorServer = require('falcor-express');
var NavigationRouter = require('./api/falcor/routers/navigation');

var routers = require('./api/express/routers/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* ---- API ---- */
// falcor models
app.use('/navigation/model.json', FalcorServer.dataSourceRoute(() => new NavigationRouter()));

// express routers
app.use('/api', routers);
/* ---- /API ---- */

// static pages
app.use(express.static('.'));

/* 404 */
app.use(function(req, res, next) {
  var err = new Error('Route is not found!');
  err.status = 404;
  next(err);
});

module.exports = app;