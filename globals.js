var driver = require('chromedriver');

module.exports = {

  beforeEach: function (browser, done) {
    console.log('Executing the global `beforeEach`');
    browser.url('https://www.comeuntochrist.org/');
    browser.expect.element('body').to.be.present;
    browser.end();

    // getting the session info
    browser.status(function (result) {
      console.log("Session Info: ", result.value);
      done();
    });
  },


  afterEach: function (browser, done) {
    console.log('Executing the global `afterEach`');

    browser.url('https://www.comeuntochrist.org/');
    browser.expect.element('body').to.be.present;
    browser.end();

    // getting the session info
    browser.status(function (result) {
      console.log("Session Info: ", result.value);
      done();
    });
  },


  before: function (done) {
    console.log('Executing the global `before`');
    console.log('starting the chromedriver');

    driver.start();
    done();
  },


  after: function (done) {
    console.log('Executing the global `after`');
    console.log('stoppin the chromedriver');

    driver.stop();
    done();
  }
};