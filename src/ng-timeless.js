(function() {
  'use strict';

  var Timeless = angular.module("Timeless", []);
  Timeless.directive('timeless', function() {

    var Timeless = {
      times: {
        year: 31557600000, month: 2629800000, week: 604800000,
        day: 86400000, hour: 3600000, minute: 60000, second: 1000
      },
      labels: {
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
        suffix: '',
        updateInterval: 1000
      },
      epoch: function() {
        return Date.now();
      },
      difference: function(time) {
        return this.epoch() - time;
      },
      estimate: function(date) {
        var diff = this.difference(date)
          , ago
          , future
          , time
          , result = [];

        for (time in this.times) {
          if (diff >= this.times[time]) {
            ago = Math.floor(diff / this.times[time]);
            if (ago > 1 ) {
              time = Timeless.labels[time][1];
            };
            result.push(
              Timeless.labels.prefix
              + ' '
              + ago
              + ' '
              + time
              + ' '
              + Timeless.labels.past
              + ' '
              + Timeless.labels.suffix
              );
          }
          else if (diff < 0 && diff <= this.times[time]) {
            future = Math.abs(Math.floor(diff / this.times[time]));
            if (future > 1 ) {
              time = Timeless.labels[time][1];
              result.push(
                Timeless.labels.prefix
                + ' '
                + Timeless.labels.future
                + ' '
                + future
                + ' '
                + time
                + ' '
                + Timeless.labels.suffix
              );
            };
          };
        }
        return result;

      }

    }

    return {
      transclude: true,
      restrict: 'E',
      replace: true,
      template: '<span ng-transclude></span>',
      scope: {
          time: '=',
          options: '='
      },
      link: function(scope, element, attrs) {
        angular.extend(Timeless.labels, scope.options);
        setTimeout(function() {
            var estimateTime = Timeless.estimate(scope.time);
            return element.text(estimateTime[0]);
        }, 1)
        setInterval(function () {
          scope.$apply(function () {
            var estimateTime = Timeless.estimate(scope.time);
            return element.text(estimateTime[0]);
          });
        }, Timeless.labels.updateInterval);
      }
    };
  });

}());
