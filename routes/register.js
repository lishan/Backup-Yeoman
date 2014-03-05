/**
 * User: fred
 * Date: 3/5/14
 * Time: 5:31 PM
 */
var mongoose = require('mongoose');
var model = mongoose.model('people', {email: 'string', password: 'string'});
function register(app){
    app.get('/action/register',function(req,res){
        var email = req.query.email,pass = req.query.pass;
        mongoose.connect('mongodb://localhost:27017/getd');
        model.create({email : email, password : pass},function(err){
            if(err){
                console.log(err);
            }
            mongoose.connection.close();
            res.send(200,"correct");
        });
    });
    app.get('/action/findUser',function(req,res){
        var email = req.query.email;
        mongoose.connect('mongodb://localhost:27017/getd');
        model.findOne({email : email}).select('email').exec(function(err,user){
            mongoose.connection.close();
            if(!user){
                res.json({ response : true});
            }else{
                res.json({ response : false});
            }
        });
    });
}
exports.register = register;