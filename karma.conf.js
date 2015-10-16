
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'libs/angular.js',
      'libs/angular-mocks.js',
      'libs/angular-scenario.js',
      'src/*.js',
      'tests/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/*.js' : ['coverage'],
    },

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },

    reporters: ['mocha','coverage','coveralls'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  })
}
