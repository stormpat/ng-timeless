## Angularjs Timeless

Easily show timestamps in a human readable form in your AngularJS applications.

### Usage

Grab the angular-timeless.js library (written as a directive) and give you HTML a new element.
This lib is not finished, when it is i will make it a full-blown angular module.

```html
<div ng-controller="TimeAgo">
  <timeless time="agotime"></timeless>
</div>
```

Then give the ```agotime``` (or call it what you want) variable a value from your app.

```js
// Example in a controller.
app.controller("TimeAgo", function($scope) {
  $scope.agotime = Date.parse("Jan 4, 2014");
});

```

The result
```
5 months ago

// or in HTML

<div ng-controller="Time" class="ng-scope">
  <span ng-transclude time="agotime" class="ng-isolate-scope">5 months ago</span>
</div>
```

The repo contains demo .html and app.js files.

### Roadmap

I plan to make the lib alot more flexible, adding options and other goodness.
But for now it only does one task, converts a unit timestamp to a estimated value,
eg. "5 months ago".

For now the language is kindof hardcoded, so only english is supported atm. I plan to
rewrite the lib with language options so you can add your own locale.

Future dates will also be supported soon.

### License

MIT.


