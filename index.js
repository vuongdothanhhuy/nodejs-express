var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

app.get('/sample', function (req, res) {
    res.send('this is a sample!');
});

app.post('/example', function(req, res){
    res.send('Username: ' + req.body.username);
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

//io.on('connection', function (socket) {
//    socket.on('inComingMessage', function (message) {
//        var censor = 'fuck';
//        var rep = message.replace(censor, '*beep*');
//        io.emit('inComming', rep);
//    });
//});
