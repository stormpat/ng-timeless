## Angularjs Timeless

[![Build Status](https://travis-ci.org/stormpat/Timeless.svg?branch=master)](https://travis-ci.org/stormpat/Timeless)

Easily show timestamps in a human readable form (```eg. 5 months ago```) in your AngularJS applications.

- Support for internationalization (kindof).
- The timestamp will auto-update on a given interval. (defaults to 1 sec.)
- The output is modifiable.

### Usage

Grab the [ng-timeless.js](https://github.com/stormpat/Timeless/blob/master/src/ng-timeless.js) module (written as a directive) and give you HTML a new element.
The options attribute is optional. (Must be an object)

```html
<div ng-controller="TimeAgo">
  <timeless time="agotime" options="yourOptions"></timeless>
</div>
```

Use angulars DI to inject the module, then give the ```agotime``` (or call it what you want) variable a value from your app.

```js
// Example in a controller.
var app = angular.module("Timetest", ['Timeless']);
app.controller("TimeAgo", function($scope) {
  $scope.agotime = Date.parse("Jan 4, 2014");
});
```

The result in your view is something like: ```6 months ago```

Theres also a (experimental) feature for displaying timestamps in a specific format, you can display the time in the same
format if you want to. pass in a extra ```type``` attribute as a normal string.

```
  <timeless time="agotime" options="localize" type="'hour'"></timeless>
```

Will display the human time in hours*

*Options*

- auto: (default)
- month
- week
- day
- hour
- minute
- second

* NOTE. sometimes for dates not far in the past or future will not contain a value for years/months etc. This feature
is best for dates long in the past or future.

### Options

I tried to keep everything as extendable as possible, so you can pass in an options object to
the directive modifying the behaviour. You can translate the output by overriding the defaults.

Pass in the object as a options parameter to override.

```js
    $scope.yourOptions = {
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
        updateInterval: 1000,
      };
```

### Roadmap

For now the language translation functionality is very basic, but it works for langauges with the same
semantics as english. For languages that has diffrent semantics on past, present and future tense
you could try overwriting the defaults and use the prefix and suffixes.


### License

MIT.


