var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var path = require('path')
var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')
var compiler = webpack(config);

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/app'))
app.use(webpackMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.get('/', function response(req, res) {
	res.sendFile(path.join(__dirname, 'app/index.html'))	
});

server.listen(app.get('port'), function() {
    console.log('Listening to', app.get('port'))
})


io.on('connection', function (socket) {
	socket.on('test', function () {
		console.log('test triggered')
	})
})