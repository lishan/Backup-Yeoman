/**
 * Created by lsyu on 3/20/14.
 */
app.controller('tasks',['$scope','$http',function($scope,$http){
    $scope.change = function(){
        if($scope.task.indexOf('@') != -1){
            console.log("I found a task");
        }
    }
}]);