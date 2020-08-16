var driver = require('chromedriver');

module.exports = {
  before(browser, done) {
    // > this will get run only ONCE, before all the tests <

    browser.url('https://www.comeuntochrist.org/');
    //browser.resizeWindow(1280, 800);
    browser.maximizeWindow();
    browser.deleteCookies();
    browser.expect.element('body').to.be.present;

    done();
  },
  beforeEach(browser, done) {
    // > this will get run before every test case <
    console.log('Momma Likes me');
    done();
  },

  //tags: ['your', 'tags', 'go', 'here'],

  'Test Case No.1': (browser) => {
    // > this test does something here <
    browser
      .waitForElementVisible('.page-header-nav_openIcon')
      .click('.page-header-nav_openIcon');
  },
  'Test Case No.2': (browser) => {
    // > this test does something else here <
    browser
      .expect.element('.page-header-nav_link').text.to.equal('Believe')
  },
  'Test Case No.3': (browser) => {
    // > this test does something else here <
    browser
      .expect.element('').to.have.value.that.equals('Search')
  },

  afterEach(browser, done) {
    // > this will get run after every test case <
    console.log('Dadda Likes me');
    done();
  },
  after(browser, done) {
    // > this will get run ONCE, after all tests have run <
    browser.end();
    done();
  }
};