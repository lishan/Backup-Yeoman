/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// Don't use jade template engine, just html will be OK for angular page usage
//app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.cookieParser('Fred Collaborate'));
app.use(express.cookieSession());

//Set default module public and insert lib into node_modules and bower_components directory
app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// backend route to fetch json data, do not use template
require('./routes/main').main(app);
require('./routes/register').register(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
