var Router = require('falcor-router');

var $atom = require('falcor').Model.atom;

var UserRouter = Router.createClass([
    {
        route: "login",
        get: function() {
            return {path:["top"], value: $atom(top)};
        }
    }
]);

module.exports = UserRouter;