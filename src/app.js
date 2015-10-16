var app = angular.module('app', []);

app.filter('encode', function () {
  return function(input) {
    return encodeURI(input);
  };
});

app.directive('password', function() {
  return {
    restrict: 'E',
    template: '<div><span id="indicator">{{strength}}</span> <span id="match">{{ match }}</span></div>',
    transclude: true,
    scope: {
      password: '@',
      repeat: '@'
    },
    link: function($scope, elem, attrs) {
      $scope.strength = '0';
      $scope.match = false;


      $scope.$watch('password', function(value) {
        $scope.strength = value.length;
      });

      $scope.$watch('repeat', function(value) {
        $scope.match = value == $scope.password;
      });
    }
  };
});

app.controller('NewUserCtrl', function($scope) {
  $scope.user = {
    name: null,
    lastname: null,
    username: null
  };

  $scope.$watch('user.name', function() {
    updateUserName();
  });

  $scope.$watch('user.lastname', function() {
    updateUserName();
  });

  var updateUserName = function() {
    var name = $scope.user.name;
    var lastname = $scope.user.lastname;

    $scope.user.username = (name!==null)?name:'';
    $scope.user.username += (lastname!==null)?lastname:'';
    $scope.user.username = $scope.user.username.toLowerCase();
  }
});

app.factory('Book', function($http) {
  var format = function(rawData) {
    var book = null;
    if (typeof rawData!=='undefined') {
      book = {
        title: rawData.mainTitle,
        author: rawData.author.name,
        synopsis: rawData.info.synopsis
      };
    }
    return book;
  };

  var getBook = function(isbn, book) {
    return $http.get('http://books.web.com/isbn/'+isbn);
  }

  return {
    format: format,
    get: getBook
  };
});
