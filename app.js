
var app = angular.module("Timetest", []);

app.controller("Time", function($scope) {
  $scope.agotime = Date.parse("Jul 1, 2011");
});