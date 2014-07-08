
var app = angular.module("Timetest", ['Timeless']);

app.controller("Time", function($scope) {
    $scope.localize = {
        past: ['ago'],
        future: ['in'],
        year: ['year', 'years'],
        month: ['month', 'months'],
        week: ['week', 'weeks'],
        day: ['day', 'days'],
        hour: ['hour', 'hours'],
        minute: ['minute', 'minutes'],
        second: ['second', 'seconds'],
        prefix: '',
        suffix: ''
      };

    $scope.agotime = Date.parse("Jul 4, 2016");


});

