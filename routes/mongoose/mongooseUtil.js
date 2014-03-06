/**
 * User: fred
 * Date: 3/6/14
 * Time: 10:55 AM
 * This file contains mongoose config and connection method
 */
var mongoose = require('mongoose');
var local = 'mongodb://localhost:27017/getd';
module.exports = function(){
    mongoose.connect(local);
}