var app = require('./app');
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(9090, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('navigate to http://localhost:9090')
});