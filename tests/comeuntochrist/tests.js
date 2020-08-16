var driver = require('chromedriver');

module.exports = {
  before(browser, done) {
    // > this will get run only ONCE, before all the tests <
    driver.start();

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

  // 'Test Case No.1': (browser) => {
  //   // > this test does something here <

  //   browser
  //     .waitForElementVisible('.page-header-nav_openIcon')
  //     .click('.page-header-nav_openIcon')

  //   //Do the stuff and the things for clicking under Believe, Belong, Become, and Contact


  //   //close element and reset - this to be possibly used at a later time - in sequence with the same class as the .click() that opens it
  //   //.click('.page-header-nav_openIcon')
  // },
  'Test Case No.2': (browser) => {
    // > hamburger menu should still be open - waiting for  <
    browser
      // .page-header-nav_navSeparator > li:nth-child(1) > a:nth-child(1)
      // body > header > nav > div > div:nth-child(4) > ul > li:nth-child(1) > a
      .waitForElementVisible('body > header > nav > div > div:nth-child(4) > ul > li:nth-child(1) > a')
      .expect.element('body > header > nav > div > div:nth-child(4) > ul > li:nth-child(1) > a').text.to.equal('Believe')
    //.click('.page-header-nav_openIcon')

  },
  'Test Case No.3': (browser) => {
    // > this test does something else here <
    browser
      // .page-header-nav_openSearch
      // body > header > nav > div > div.page-header-nav_icons > button
      .waitForElementVisible('.page-header-nav_openSearch')
      .click('.page-header-nav_openSearch')
      .waitForElementVisible('.search-form_form')
      //.expect.element('.search-form_form').text.to.equal('Search')
      .assert.containsText('.search-form_form', 'Search')
  },

  'Test Case No.4': (browser) => {
    browser
      .assert.urlContains('https://www.comeuntochrist.org/', 'Params: Currently on Home Page')

      .assert.visible('.emphasized-media-tile_container')
      .useXpath()
      .assert.containsText('/html/body/div[5]/div/div/div[1]/a/div[2]/div[2]/div/div/span', 'Explore All Beliefs')
      .saveScreenshot('tests_output/final.png')
  },

  'Test Case No.5': (browser) => {

    let popoutBar = browser.page.popoutNav();
    popoutBar.navigate()
      .click('@hamburgerIcon')
      .waitForElementVisible('@believe_FollowingJesus', 3000)
      .click('@believe_FollowingJesus');

    // popoutBar.commands.toggleNav();
  },

  'Test Case No.6': (browser) => {
    let homepage = browser.page.homePage();
    homepage.navigate()
      .assert.visible('@homepage_OrangeBelieveText')
      .assert.containsText('@homepage_OrangeBelieveText', 'Believe');
  },


  afterEach(browser, done) {
    // > this will get run after every test case <
    console.log('Dadda Likes me');
    done();
  },
  after(browser, done) {
    // > this will get run ONCE, after all tests have run <
    browser.end();

    driver.stop();
    done();
  }
};