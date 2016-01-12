var Router = require('falcor-router');
var User = require('../../../../models/user');

var UserRouter = Router.createClass([
    {
        route: "login",
        set: function(user) {
            new User({
                login: user.login
            }).save(function(err) {
                if(err) {
                    console.log("ERROR USER MODEL [SET LOGIN]: ", err);
                }
            });

            // TODO: not sure we should return smth
            return {path:["login"], value: user.login};
        }
    }
]);

module.exports = UserRouter;