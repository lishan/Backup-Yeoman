/**
 * User: fred
 * Date: 3/5/14
 * Time: 4:19 PM
 */
app.controller("registerForm",['$scope','$http',function($scope,$http){
    $scope.reset = function(){
        $scope.data = {};
    };
    $scope.changeEmail = function(){
        if($scope.data.styleEmail ==  "" || $scope.data.styleEmail == null || $scope.data.styleEmail == undefined){
            $scope.data.styleEmailError = "has-error";
            $scope.data.styleEmailEmpty = true;
            $scope.data.styleEmailNotMatch = false;
        }else if(!$scope.data.styleEmail.match(/.*@.*/)){
            $scope.data.styleEmailError = "has-error";
            $scope.data.styleEmailNotMatch = true;
            $scope.data.styleEmailEmpty = false;
        }else{
            $scope.data.styleEmailError = "";
            $scope.data.styleEmailEmpty = false;
            $scope.data.styleEmailNotMatch = false;
        }
    };
    $scope.changePass = function(){
        if($scope.data.stylePass.length < 6){
            $scope.data.stylePassError = "has-error";
            $scope.data.stylePassShort = true;
        }else{
            $scope.data.stylePassError = "";
            $scope.data.stylePassShort = false;
        }
    };
    $scope.changeConfirmPass = function(){
        if($scope.data.stylePass != $scope.data.styleConfirmPass){
            $scope.data.styleConfirmPassError = "has-error";
            $scope.data.styleConfirmPassNotMatch = true;
        }else{
            $scope.data.styleConfirmPassError = "";
            $scope.data.styleConfirmPassNotMatch = false;
        }
    };
    $scope.submit = function(){
        if($scope.data.styleEmailError == "" && $scope.data.stylePassError == "" && $scope.data.styleConfirmPassError == ""){
            $http({
                method:'POST',
                url:'/action/findUser',
                data:{
                    email:$scope.data.styleEmail
                }
            }).success(function(res){
                if(res.response){
                    $http({
                        method: 'POST',
                        url: '/action/register',
                        data:{
                            email:$scope.data.styleEmail,
                            pass:$scope.data.stylePass
                        }
                    }).success(function (res) {
                        $scope.data.showRegisterStatusClass = "alert-success";
                        $scope.data.showRegisterStatus = "Congratulations! Register completed!";
                        $scope.data.registerPanel = true;
                        $scope.data.formPanel = true;
                    });
                }else{
                    $scope.data.showRegisterStatusClass = "alert-warning";
                    $scope.data.showRegisterStatus = "Email has been registered! Please change another email!"
                    $scope.data.registerPanel = true;
                }
            });
        }
    }
}]);
