exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://127.0.1.1:8080/app',

  framework: 'jasmine2',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  }

};
