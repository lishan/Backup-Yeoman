/**
 * User: fred
 * Date: 3/6/14
 * Time: 1:22 PM
 */
app = angular.module('myApp',['ngRoute']);
app.controller("nav",['$scope','$http',function($scope,$http){
    $scope.init = function(){
        $http({
            method:'POST',
            url:'/session/user'
        }).success(function(res){
                if(res.response){
                    $scope.loginUser = true;
                    $scope.user = res.email;
                }
            });
    }
    $scope.logout = function(){
        $http({
            method:'POST',
            url:'/session/logout'
        }).success(function(res){
                if(res.response){
                    location.href = '/index.html';
                }
            })
    }
}]);
