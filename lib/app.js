var app = angular.module('AwosApp', []);
app.controller('AwosCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    AOS.init();
});