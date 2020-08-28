var driver = require('chromedriver');
const contactUsPage = require('../../pages/contactUsPage');
const homePage = require('../../pages/homePage');
const searchPage = require('../../pages/searchResultsPage');
const worshipWithUsPage = require('../../pages/worshipWithUsPage');
const popOutNavPage = require('../../pages/popOutNav');

module.exports = {

  // >---------------------------------------------------------------------------------------------------------------------------------------<
  // >------------------------------------- Test Setup Process ------------------------------------------------------------------------------<
  // >---------------------------------------------------------------------------------------------------------------------------------------<

  before(browser, done) {
    //  > this will get run only ONCE, before all the tests <
    driver.start();

    browser.deleteCookies();

    done();
  },
  beforeEach: browser => {
    //  > this will get run before every test case <
    browser.maximizeWindow();
  },

  // >---------------------------------------------------------------------------------------------<
  // >------------------------------------- Start Test Cases  -------------------------------------<
  // >---------------------------------------------------------------------------------------------<

  // Do the stuff and the things for clicking under Believe, Belong, Become, and Contact
  /*
   * Test case numbers based on Test Plan Document. See "Comeuntochrist-Test-Plan-1-v2.docx"
   *
   */

  // > HOME PAGE ----------------------------------------------------------------------------------<

  '1. Verify left-nav pops out': browser => {
    let homepage = browser.page.homePage();

    homepage.navigate()
      .homePagePopOutNav();
  },

  '2. Verify links in left-nav go to proper pages': browser => {
    let popoutBar = browser.page.popOutNav();

    popoutBar.navigate()
      .leftNavCheck();
  },

  '3. Verify all link images on homepage go to their respective pages ': browser => {
    let homepage = browser.page.homePage();

    homepage
      .clickImage1()
      .clickImage2()
      .clickImage3()
      .clickImage4()
      .clickImage5()
      .clickImage6()
      .clickImage7()
      .clickImage8()
      .clickImage9()
      .clickImage10();
  },

  // SKIP FOR NOW - iframe
  // '4. Verify ALL Videos on homepage play': browser => {
  //   // locate a video on the homepage
  //   // select the play button
  //   // let video play for 15 seconds
  //   // select pause button
  //   // End

  //   let homepage = browser.page.homePage();

  //   homepage.navigate()
  //     .waitForElementVisible('@homepage_Vid1hRef', 10000)
  //     .click('@homepage_Vid1hRef');

  //   homepage.navigate()
  //     .waitForElementVisible('@homepage_Vid2hRef', 10000)
  //     .click('@homepage_Vid2hRef');

  //   homepage.navigate()
  //     .waitForElementVisible('@homepage_Vid3hRef', 10000)
  //     .click('@homepage_Vid3hRef');
  // },

  '5. Confirm that “Inspire your inbox” sends an email to me': browser => {
    let homepage = browser.page.homePage();

    homepage
      .sendEmailToMe();
  },

  // SKIP FOR NOW - iframe
  // '6. Verify that Floating footer links function': browser => {
  //   // Verify number of links (3 total links)
  //   // Click on all three links
  //   // verify they go to their respective url's
  //   // navigate back to to homePage

  //   let homepage = browser.page.homePage();

  //   homepage.navigate()
  //     .waitForElementVisible('@homepage_Vid1hRef')
  //     .click('@homepage_Vid1hRef');
  // },

  '7. Verify Terms of Service link': browser => {
    let homepage = browser.page.homePage();

    homepage
      .verifyTOSLink();
  },

  '8. Verify Privacy Notice Link': browser => {
    let homepage = browser.page.homePage();

    homepage
      .verifyPNLink();
  },

  '9. Verify Feedback Page Link': browser => {
    let homepage = browser.page.homePage();

    homepage
      .verifyFPLink();

  },

  '10. Verify Cookie Preferences link': browser => {
    let homepage = browser.page.homePage();

    homepage
      .verifyCPLink();
  },


  '11. Home Page Select Search Icon': browser => {
    let homepage = browser.page.homePage();
    //let searchresults = browser.page.searchResultsPage();

    //homepage.navigate()
    //  .searchHomePage('Jesus', 'Jesus');

    //searchresults
    //  .waitForElementVisible('@searchresults_collection')
    //  .assert.visible('@searchresults_collection');
  },

  '12. Select Contact Us (phone icon on header/top-nav bar)': browser => {
    // Scroll down to Find a church near you
    // Enter full address information
    // Street, City, State, Zip
    // Click Search button
    // Wait for results
    // verify address switches to this URL
    // https://www.comeuntochrist.org/worship-with-us/nearby-churches?location=1161%20SW%206th%20Ave%2C%20Ontario%2C%20OR%2097914
    // Select one of several addresses from "Here are some congregations near you"
    let homepage = browser.page.homePage();
    let contactuspage = browser.page.contactUsPage();

    //homepage.navigate().contactUsClick();

    //contactuspage
    //  .submitAddressSearch('4102 E. Chinook St. Eagle Mountain, UT. 84005', '@worship_ResultsGetDirections');
  },

  // > BOOK OF MORMON - PAGE --------------------------------------------------------------------------<

  '13. Verify all links on Book of Mormon page': browser => {
    let bofmpage = browser.page.bofmPage();

    bofmpage
      .bookOfMormonLinks();
  },
  // SKIP FOR NOW - iframe
  //'14. Play Video on BofM Page': browser => {
  // Locate Play button
  // Select Play
  // Select Pause
  // Next Element (what element?) on Page

  //},

  '15. Common Questions Drop Downs': browser => {
    let bofmpage = browser.page.bofmPage()

    bofmpage
      .bookOfMormonDrawers();
  },

  // >-------------------------------------------------------------------------------------------<
  // >------------------------------------- End Test Cases  -------------------------------------<
  // >-------------------------------------------------------------------------------------------<

  // >------------------------------------------------------------------------------------------------------------------------------------------<
  // >------------------------------------- Test Teardown Process ------------------------------------------------------------------------------<
  // >------------------------------------------------------------------------------------------------------------------------------------------<

  afterEach: browser => {
    //  > this will get run after every test case <
  },
  after(browser, done) {
    //  > this will get run ONCE, after all tests have run <
    browser.end();
    driver.stop();
    done();
  }
}