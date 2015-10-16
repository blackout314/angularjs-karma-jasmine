describe('Module encode', function() {
  var encodeFilter;

  beforeEach(module('app'));

  beforeEach(inject(function($filter) {
    encodeFilter = $filter('encode');
  }));

  it('should encode a URL with unusual characters', function() {
    var url = 'http://www.foo.com/234234/Build & Jones éí%';
    var urlExpected = 'http://www.foo.com/234234/Build%20&%20Jones%20%C3%A9%C3%AD%25';
    expect(encodeFilter(url)).toBe(urlExpected);
  });
});
