var app = require('./app');
var db = require('./database');

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', process.env.PORT || 8080);
var port = app.get('port');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    server.listen(port, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('navigate to http://localhost:' + port);
    });
});