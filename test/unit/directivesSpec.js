

describe("Timeless", function() {
  beforeEach(function (){

    angular.module('Timeless');
    html = '<timeless time="agotime" options="localize"></timeless>';

    inject(function($compile, $rootScope) {
      //create a scope (you could just use $rootScope, I suppose)
      scope = $rootScope.$new();

      //get the jqLite or jQuery element
      elem = angular.element(html);

      //compile the element into a function to
      // process the view.
      compiled = $compile(elem);


      //run the compiled view.
      compiled(scope);

      //call digest on the scope!
      scope.$digest();

    });
  });

  it("should show the correct unix timestamp", function() {
    scope.agotime = Date.parse("Jul 8, 2014");
    expect(scope.agotime).toBe(1404766800000);
  });

  it("should inject the correct human readable time", function() {
    //
  });

});
