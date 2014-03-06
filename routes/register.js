/**
 * User: fred
 * Date: 3/5/14
 * Time: 5:31 PM
 */
module.exports = function(app,mongoose){
    var people = mongoose.model('people', {email: 'string', password: 'string'});
    app.post('/action/register',function(req,res){
        var email = req.body.email,pass = req.body.pass;
        people.create({email : email, password : pass},function(err){
            if(err){
                console.log(err);
            }
            res.send(200,"correct");
        });
    });
    app.post('/action/findUser',function(req,res){
        var email = req.body.email;
        people.findOne({email : email}).select('email').exec(function(err,user){
            if(err){
                console.log(err);
            }
            if(!user){
                res.json({ response : true});
            }else{
                res.json({ response : false});
            }
        });
    });
}