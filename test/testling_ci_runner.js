// Used to run the tests on Testling CI
var jasmineEnv = jasmine.getEnv();
jasmineEnv.updateInterval = 1000;

// Produce TAP output for Testling CI
jasmineEnv.addReporter(new TAPReporter(function (s) {console.log(s);}));

window.onload = function() {
  jasmineEnv.execute();
};