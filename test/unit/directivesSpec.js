describe('directive: timeless', function() {
  var element, scope;

  beforeEach(module('Timeless'));

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope.$new();
    element = '<timeless time="agotime" options="localize"></timeless>';
    scope.agotime = Date.now();
    scope.options = {};
    element = $compile(element)(scope);
    scope.$digest();

  }));

  it("should add the correct classes to the element", function() {
    // Timeout is because the directive has it. Will be undefinied otherwise.
    setTimeout(function() {
      expect(element.hasClass("ng-scope ng-isolate-scope")).toBe(true);
    }, 1);
  });

  it("should show a human readable time or date", function() {
    // Timeout is because the directive has it. Will be undefinied otherwise.
    setTimeout(function() {
      expect(element.html()).toBe(' 1 second ago ');
    }, 1);
  });

});