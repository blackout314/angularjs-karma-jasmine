angular.module('app', [])
  .filter('encode', function () {
    return function(input) {
      return encodeURI(input);
    };
  });
