app.directive('timeless', function() {

  var Timeless = {

    times: {
      year: 31557600000, month: 2629800000, week: 604800000,
      day: 86400000, hour: 3600000, minute: 60000, second: 1000
    },
    epoch: function() {
      return Date.now();
    },
    difference: function(time) {
      return this.epoch() - time;
    },
    estimate: function(date, options) {
      var diff = this.difference(date)
        , ago
        , result = [];

      for (time in this.times) {
        if (diff >= this.times[time]) {
          ago = Math.floor(diff / this.times[time]);
          if (ago > 1 ) {
            time = time + 's';
          };
          result.push(ago + ' ' + time + ' ago');
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
        time: '='
    },
    link: function(scope, element, attrs) {
      var estimateTime = Timeless.estimate(scope.time);
      return element.text(estimateTime[0]);
    }
  };
});
