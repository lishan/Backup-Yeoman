/**
 * User: fred
 * Date: 3/5/14
 * Time: 5:31 PM
 */
var mongooseUtil = require('./mongoose/mongooseUtil');
module.exports = function(app){
    app.post('/action/register',function(req,res){
        var email = req.body.email,pass = req.body.pass;
        mongooseUtil.connect();
        var people = mongooseUtil.mongoose().model('people', {email: 'string', password: 'string'});
        people.create({email : email, password : pass},function(err){
            if(err){
                console.log(err);
            }
            mongooseUtil.close();
            res.send(200,"correct");
        });
    });
    app.post('/action/findUser',function(req,res){
        var email = req.body.email;
        mongooseUtil.connect();
        var people = mongooseUtil.mongoose().model('people', {email: 'string', password: 'string'});
        people.findOne({email : email}).select('email').exec(function(err,user){
            if(err){
                console.log(err);
            }
            mongooseUtil.close();
            if(!user){
                res.json({ response : true});
            }else{
                res.json({ response : false});
            }
        });
    });
}