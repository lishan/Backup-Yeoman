/**
 * User: fred
 * Date: 2/28/14
 * Time: 11:02 PM
 * Require js load module, include all the front end javascript like jquery and angular
 * @Deprecated cause by require js support angular issue
 */
require.config({
    paths : {
        'jquery' : "/bower_components/jquery/dist/jquery.min",
        'angular' : "/bower_components/angular/angular.min",
        'angular-route' : "/bower_components/angular-route/angular-route.min",
        'bootstrap' : "/bower_components/bootstrap/dist/js/bootstrap.min",
        'test' : "./test"
    },
    shim : {
        'bootstrap' : {deps : ['jquery']},
        'angular' : {exports : 'angular'},
        'angular-route' : {deps : ['angular']},
        'test' : {deps: ['angular','angular-route']}
    }
});

require(['jquery','bootstrap','angular','angular-route'],function(){
    console.log('Require js load module completed.');
});
