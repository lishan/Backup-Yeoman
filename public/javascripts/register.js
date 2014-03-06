/**
 * User: fred
 * Date: 3/5/14
 * Time: 4:19 PM
 */
var app = angular.module("register",['ngRoute']);
app.controller("registerForm",['$scope','$http',function($scope,$http){
    $scope.changeEmail = function(){
        if($scope.styleEmail ==  "" || $scope.styleEmail == null || $scope.styleEmail == undefined){
            $scope.styleEmailError = "has-error";
            $scope.styleEmailEmpty = true;
            $scope.styleEmailNotMatch = false;
        }else if(!$scope.styleEmail.match(/.*@.*/)){
            $scope.styleEmailError = "has-error";
            $scope.styleEmailNotMatch = true;
            $scope.styleEmailEmpty = false;
        }else{
            $scope.styleEmailError = "";
            $scope.styleEmailEmpty = false;
            $scope.styleEmailNotMatch = false;
        }
    };
    $scope.changePass = function(){
        if($scope.stylePass.length < 6){
            $scope.stylePassError = "has-error";
            $scope.stylePassShort = true;
        }else{
            $scope.stylePassError = "";
            $scope.stylePassShort = false;
        }
    };
    $scope.changeConfirmPass = function(){
        if($scope.stylePass != $scope.styleConfirmPass){
            $scope.styleConfirmPassError = "has-error";
            $scope.styleConfirmPassNotMatch = true;
        }else{
            $scope.styleConfirmPassError = "";
            $scope.styleConfirmPassNotMatch = false;
        }
    };
    $scope.submit = function(){
        if($scope.styleEmailError == "" && $scope.stylePassError == "" && $scope.styleConfirmPassError == ""){
            $http({
                method:'POST',
                url:'/action/findUser',
                data:{
                    email:$scope.styleEmail,
                    pass:$scope.stylePass
                }
            }).success(function(res){
                if(res.response){
                    $http({
                        method: 'POST',
                        url: '/action/register',
                        data:{
                            email:$scope.styleEmail,
                            pass:$scope.stylePass
                        }
                    }).success(function (res) {
                        $scope.showRegisterStatusClass = "alert-success";
                        $scope.showRegisterStatus = "Congratulations! Register completed!";
                        $scope.registerPanel = true;
                        $scope.formPanel = true;
                    });
                }else{
                    $scope.showRegisterStatusClass = "alert-warning";
                    $scope.showRegisterStatus = "Email has been registered! Please change another email!"
                    $scope.registerPanel = true;
                }
            });
        }
    }
}]);
