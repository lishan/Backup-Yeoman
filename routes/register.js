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
    app.post('/action/login',function(req,res){
        var email = req.body.email,pass = req.body.pass;
        people.findOne({email : email, password: pass}).select('email').exec(function(err,user){
            if(err) console.log(err);
            if(user){
                req.session.user = req.body.email;
                res.json({response:true});
            }else{
                res.json({response:false});
            }
        });
    });
    app.post('/session/user',function(req,res){
        var email = req.session.user;
        if(email){
            res.json({response:true,email:email});
        }else{
            res.json({response:false});
        }
    });
    app.post('/session/logout',function(req,res){
        var email = req.session.user;
        if(email){
            req.session = null;
            res.json({response:true});
        }
    });
}