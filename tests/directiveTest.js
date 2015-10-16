describe('Password directive', function() {
  var $scope,
    element,
    scope;
  var html = '<password data-password="{{password}}" data-repeat="{{password2}}"></password>';

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope;

    $scope.password = 'abc';
    $scope.password2 = 'abc2';

    element = angular.element(html);
    $compile(element)($scope);

    scope = element.scope();
    $scope.$digest();
  }));

  it("should have a strength of 3", function() {
    expect(scope.$$childHead.strength).toEqual(3);
  });

  it("should not match with the repeated", function() {
    expect(scope.$$childHead.match).toBeFalsy();
  });

  it("should match with the repeated", function() {
    $scope.password2 = 'abc';
    $scope.$digest();
    expect(scope.$$childHead.match).toBeTruthy();
  });
});
