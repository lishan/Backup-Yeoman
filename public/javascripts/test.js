/**
 * User: fred
 * Date: 3/3/14
 * Time: 11:12 AM
 */
var app = angular.module("myApp",[]);
app.controller("a",['$scope','$http',function($scope,$http){
    var p = $http({
        method: 'GET',
        url: '/'
    }).success(function(res,status,headers,config){
            $scope.model = res["user"];
        });
}]);