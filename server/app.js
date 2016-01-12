var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var FalcorServer = require('falcor-express');

/* ---- import falcor routers ---- */
var NavigationRouter    = require('./api/falcor/routers/navigation');
var NewsRouter          = require('./api/falcor/routers/news');
var UserRouter          = require('./api/falcor/routers/user');

var routers = require('./api/express/routers/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* ---- API ---- */
// falcor models api
app.use('/navigation/model.json',   FalcorServer.dataSourceRoute(() => new NavigationRouter()));
app.use('/news/model.json',         FalcorServer.dataSourceRoute(() => new NewsRouter()));
app.use('/user/model.json',         FalcorServer.dataSourceRoute(() => new UserRouter()));

// express routers api
app.use('/api', routers);
/* ---- /API ---- */

app.use(require('json-middleware').middleware());

// static pages
app.use(express.static('./public'));

/* 404 */
app.use(function(req, res, next) {
  var err = new Error('Route is not found!');
  err.status = 404;
  next(err);
});

module.exports = app;