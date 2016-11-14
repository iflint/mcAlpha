var express = require('express')
var path = require('path')
var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware')
var config = require('./webpack.config.js')

var app = express()
var compiler = webpack(config);

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/app'))
app.use(webpackMiddleware(compiler))
app.get('/', function response(req, res) {
	res.sendFile(path.join(__dirname, 'app/index.html'));	
});

app.listen(app.get('port'), function() {
    console.log('Listening to', app.get('port'));
});