/**
 * User: fred
 * Date: 3/3/14
 * Time: 12:29 PM
 * This is mainly config backend route file for express module
 */
module.exports = function(app){
    app.get('/',function(req,res){
        res.json({
            user    :   "title"
        });
    });
}