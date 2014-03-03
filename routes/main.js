/**
 * User: fred
 * Date: 3/3/14
 * Time: 12:29 PM
 * This is mainly config backend route file for express module
 */
function main(app){
    app.get('/',function(res,req){
        req.json({
            user    :   "title"
        });
    });
}
exports.main = main;
