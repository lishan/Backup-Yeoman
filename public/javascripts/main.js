/**
 * User: fred
 * Date: 2/28/14
 * Time: 11:02 PM
 * Require js load module, include all the front end javascript like jquery and angular
 */
require.config({
    baseUrl : "/bower_components",
    paths : {
        jquery : "jquery/jquery.min",
        angular : "angular/angular.min",
        bootstrap : "bootstrap/docs/assets/js/bootstrap.min"
    }
})
require(['jquery',
    'angular',
    'bootstrap',
    '/javascripts/test.js'
], function(){
    console.log("Require js load files completed.");
});