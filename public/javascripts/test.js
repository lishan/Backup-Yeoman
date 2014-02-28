/**
 * User: fred
 * Date: 2/28/14
 * Time: 10:31 PM
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open', function callback(){
    //yeah
});

var schema = new mongoose.Schema({name : 'string'});
var Tank = mongoose.model('Tank',schema);

var first = new Tank({name : "12345"});
first.save(function(err){
    if(err) console.log(err);
});