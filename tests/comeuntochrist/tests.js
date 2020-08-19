var driver = require('chromedriver');
// //bofmPage
// const bofmPage = require('../../pages/bofmPage');
// //contactUsPage
// const contactUsPage = require('../../pages/contactUsPage');
// //emailSignUpForm
// const emailSignUpForm = require('../../pages/emailSignUpForm')
// //familyPage
// const familyPage = require('../../pages/familyPage')
// //feedbackPage
// const feedbackPage = require('../../pages/feedbackPage')
// //forgivePage
// const forgivePage = require('../../pages/forgivePage')
// //freeBofmPage
// const freeBofmPage = require('../../pages/freeBofmPage')
// //hearHimPage
// const hearHimPage = require('../../pages/hearHimPage')
// //homePage
// const homePage = require('../../pages/homePage');
// //missionaryVisitPage
// const missionaryVisitPage = require('../../pages/missionaryVisitPage')

//privacyNoticeFooterPage
const privacyNoticeFooterPage = require('../../pages/privacyNoticeFooterPage')

// //popOutNav
// const popOutNav = require('../../pages/popOutNav')
// //relationWithGodPage
// const relationWithGodPage = require('../../pages/relationWithGodPage')
// //tosFooterPage
// const tosFooterPage = require('../../pages/tosFooterPage');
// //worshipWithUs
// const worshipWithUs = require('../../pages/worshipWithUsPage');

module.exports = {

  //>---------------------------------------------------------------------------------------------------------------------------------------<
  //>------------------------------------- Test Setup Process - still not 100% if it's setup correctly -------------------------------------<
  //>---------------------------------------------------------------------------------------------------------------------------------------<

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
    done();
  },

  //>---------------------------------------------------------------------------------------------<
  //>------------------------------------- Start Test Cases  -------------------------------------<
  //>---------------------------------------------------------------------------------------------<

  //Do the stuff and the things for clicking under Believe, Belong, Become, and Contact

  // //tags: ['your', 'tags', 'go', 'here'],
  'Test Case No.1': (browser) => {
    // > Open the left-navigation <
    let homepage = browser.page.homePage();

    homepage.navigate()
      .waitForElementVisible('@homepage_ChurchWordMark', 3000)
      .click('@homepage_ChurchWordMark');
  },

  'Test Case No.2': (browser) => {
    // > hamburger menu should still be open - waiting for  <
    let popoutBar = browser.page.popOutNav();

    popoutBar.navigate()
      .click('@hamburgerIcon')
      .waitForElementVisible('@believe_BelieveMain')
      .expect.element('@believe_BelieveMain').text.to.equal('Believe')
  },

  'Test Case No.3': (browser) => {
    // > this test does something else here <
    let homepage = browser.page.homePage();

    browser
      .waitForElementVisible('.page-header-nav_openSearch')
      .click('.page-header-nav_openSearch')
      .waitForElementVisible('.search-form_form')
      .assert.containsText('.search-form_form', 'Search')
  },

  'Test Case No.4': (browser) => {
    let homepage = browser.page.homePage();

    browser
      .assert.urlContains('https://www.comeuntochrist.org/', 'Params: Currently on Home Page')
      .assert.visible('.emphasized-media-tile_container')
      .useXpath()
      .assert.containsText('/html/body/div[5]/div/div/div[1]/a/div[2]/div[2]/div/div/span', 'Explore All Beliefs')
      .saveScreenshot('tests_output/final.png')
  },

  'Test Case No.5': (browser) => {
    let popoutBar = browser.page.popOutNav();

    popoutBar.navigate()
      .click('@hamburgerIcon')
      .waitForElementVisible('@believe_FollowingJesus', 3000)
      .click('@believe_FollowingJesus');
  },

  'Test Case No.6': (browser) => {
    let homepage = browser.page.homePage();

    homepage.navigate()
      .waitForElementVisible('@homepage_OrangeBelieveText', 3000)
      .assert.visible('@homepage_OrangeBelieveText')
      .assert.containsText('@homepage_OrangeBelieveText', 'Believe');

    browser.page.homePage().navigate();
  },

  'Test Case No.7': (browser) => {
    let tosfooterpage = browser.page.tosFooterPage();

    tosfooterpage.navigate()
      .waitForElementVisible('@homepage_termsOfServiceLink', 3000)
      .assert.visible('@homepage_termsOfServiceLink')
      .assert.containsText('@homepage_termsOfServiceLink', 'Terms of Use (Updated 2018-09-01)');
    //.click('@homepage_termsOfServiceLink');

    browser.page.homePage().navigate();
  },

  'Test Case No.8': (browser) => {
    let privacynotice = browser.page.privacyNoticeFooterPage();
    privacynotice.navigate()
      .waitForElementVisible('@homepage_privacyNoticeLink', 3000)
      .assert.visible('@homepage_privacyNoticeLink')
      .assert.containsText('@homepage_privacyNoticeLink', 'Privacy Notice (Updated 2018-09-01)');

    browser.page.homePage().navigate();
  },

  //>-------------------------------------------------------------------------------------------<
  //>------------------------------------- End Test Cases  -------------------------------------<
  //>-------------------------------------------------------------------------------------------<

  //>------------------------------------------------------------------------------------------------------------------------------------------<
  //>------------------------------------- Test Teardown Process - still not 100% if it's setup correctly -------------------------------------<
  //>------------------------------------------------------------------------------------------------------------------------------------------<

  afterEach(browser, done) {
    // > this will get run after every test case <
    done();
  },
  after(browser, done) {
    // > this will get run ONCE, after all tests have run <
    browser.end();

    driver.stop();
    done();
  }
};