describe('NewUser Controller', function() {
  var scope,
    newUserCtrl,
    name = 'John',
    lastname = 'Doe';

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope;

    newUserCtrl = $controller('NewUserCtrl', {
      $scope: scope
    });
  }));

  it("should initially have a user with all fields empty", function() {
    expect(scope.user.name).toBeNull();
  });

  it("should have the same name as user name in lowercase when the lastname is null", function() {
    scope.user.name = name;
    scope.$apply();
    expect(scope.user.username).toBe(name.toLowerCase());
  });

  it("should have the same name as user name in lowercase when the lastname is null", function() {
    scope.user.name = name;
    scope.user.lastname = lastname;
    scope.$apply();
    expect(scope.user.username).toBe((name+lastname).toLowerCase());
  });
});
