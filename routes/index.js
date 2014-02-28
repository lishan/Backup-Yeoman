
/*
 * GET home page.
 */


var path = require('path');

exports.index = function(req, res){
    res.json({user : "tester"});
//  res.render('index', { title: 'Express' });
};
