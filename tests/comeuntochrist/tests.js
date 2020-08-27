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
    // Click on the hamburger menu on the left-nav popout to open
    // Verify popout menu shows (delay 5000ms)
    // Click on the hamburger menu on left-nav to close menu
    // End
    let homepage = browser.page.homePage();

    // homepage.navigate()
    //   .homePagePopOutNav();
  },

  '2. Verify links in left-nav go to proper pages': browser => {
    // click on the hamburger menon on the left-nav popout
    // verify open (if wait needed)
    // click on first link in list
    // press Back browser button
    // wait for screen to reset
    // click on the hamburger menu on the left-nav popout (again)
    // repeat process
    // End
    let popoutBar = browser.page.popOutNav();

    popoutBar.navigate()
      .leftNavCheck();
  },

  '3. Verify all link images on homepage go to their respective pages ': browser => {
    // check a link text for URL
    // click on the link
    // click the back button, or reset to the homepage
    // click on the next link in the list of links
    // repeat the process

    let homepage = browser.page.homePage();

    //homepage
    //  .clickImage1()
    //  .clickImage2()
    //  .clickImage3()
    //  .clickImage4()
    //  .clickImage5()
    //  .clickImage6()
    //  .clickImage7()
    //  .clickImage8()
    //  .clickImage9()
    //  .clickImage10();
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

  // '5. Confirm that “Inspire your inbox” sends an email to me': browser => {

  //   // Verify "email" text inside of box
  //   // Enter email information (dummy data from a different page object?)
  //   // click submit
  //   // manually check email inbox to verify
  //   let homepage = browser.page.homePage();

  //   homepage
  //     .sendEmailToMe();

  //   // .navigate()
  //   // .waitForElementVisible('@homepage_InspireInboxInput')
  //   // .click('@homepage_InspireInboxInput')
  //   // .setValue('@homepage_InspireInboxInput', 'testdata@mailinator.com')
  //   // .waitForElementVisible('@homepage_InspireSubmit')
  //   // .click('@homepage_InspireSubmit');

  // },

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
    // Locate Verify Terms of Service on page
    // Validate Text
    // Click on link
    let homepage = browser.page.homePage();

    //homepage
    //  .verifyTOSLink();
  },

  '8. Verify Privacy Notice Link': browser => {
    // Locate Privacy Notice on page
    // Validate Text
    // Click on link
    let homepage = browser.page.homePage();

    //homepage
    //  .verifyPNLink();
  },

  '9. Verify Feedback Page Link': browser => {
    // Locate Verify Feedback on page
    // Validate Text
    // Click on link
    let homepage = browser.page.homePage();

    //homepage
    //  .verifyFPLink();

  },

  '10. Verify Cookie Preferences link': browser => {
    // Locate Privacy Notice on page
    // Validate Text
    // Click on linkg
    // Wait for popup modal
    // Click (x) in top-right of modal (modal should close)
    // or 
    // Click on "Agree and Proceed" button (modal should close)
    let homepage = browser.page.homePage();

    //homepage
    //  .verifyCPLink();
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
    // Verify "What is the Book of Mormon?" link
    // Verify link text
    // Click link
    // Back out

    // Verify "Relationship to the Bible" link
    // Verify link text
    // Click link
    // Back out

    // Verify "4 Things to Know" link
    // Verify link text
    // Click link
    // Back out

    // Verify "Who Wrote It" link
    // Verify link text
    // Click link
    // Back out

    // Verify "Jesus in the Book of Mormon" link
    // Verify link text
    // Click link
    // Back out

    // Verify "Real People. Real Stories." link
    // Verify link text
    // Click link
    // Back out
  },

  '14. Play Video on BofM Page': browser => {
    // Locate Play button
    // Select Play
    // Select Pause
    // Next Element (what element?) on Page

  },

  '15. Common Questions Drop Downs': browser => {
    // Select "Do Mormons believe in the Bible?"
    // Open Drop Down
    // Verify some of the Text
    // Close Drop Down

    // Select “Do Mormons believe in Jesus?”
    // Open Drop Down
    // Verify some of the Text
    // Close Drop Down

    // Select “What are church services like?”
    // Open Drop Down
    // Verify some of the Text
    // Close Drop Down

    // End
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