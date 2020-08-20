var driver = require('chromedriver');

var searchPageResultsAssertDataSet = ['All are invited', 'Nearby Churches', 'This Is Church', 'Belong'];

module.exports = {

  // >---------------------------------------------------------------------------------------------------------------------------------------<
  // >------------------------------------- Test Setup Process - still not 100% if it's setup correctly -------------------------------------<
  // >---------------------------------------------------------------------------------------------------------------------------------------<

  before(browser, done) {
    //  > this will get run only ONCE, before all the tests <
    driver.start();

    browser.url('https:// www.comeuntochrist.org/');
    // browser.resizeWindow(1280, 800);
    browser.maximizeWindow();
    browser.deleteCookies();
    browser.expect.element('body').to.be.present;

    done();
  },
  beforeEach(browser, done) {
    //  > this will get run before every test case <
    done();
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

  '1. Verify left-nav pops out': (browser) => {
    // Click on the hamburger menu on the left-nav popout to open
    // Verify popout menu shows (delay 5000ms)
    // Click on the hamburger menu on left-nav to close menu
    // End
    let homepage = browser.page.homePage();

    homepage.navigate()
      .waitForElementVisible('@homepage_ChurchWordMark')
      .click('@homepage_ChurchWordMark');
  },

  '2. Verify links in left-nav go to proper pages': (browser) => {
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
      .click('@hamburgerIcon')
      .waitForElementVisible('@believe_BelieveMain')
      .expect.element('@believe_BelieveMain').text.to.equal('Believe');
  },

  '3. Verify all link images on homepage go to their respective pages ': (browser) => {
    // check a link text for URL
    // click on the link
    // click the back button, or reset to the homepage
    // click on the next link in the list of links
    // repeat the process

    let homepage = browser.page.homePage();
    homepage.navigate()
      .waitForElementVisible('@homepage_Pic1hRef')
      .click('@homepage_Pic1hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic2hRef')
      .click('@homepage_Pic2hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic3hRef')
      .click('@homepage_Pic3hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic4hRef')
      .click('@homepage_Pic4hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic5hRef')
      .click('@homepage_Pic5hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic6hRef')
      .click('@homepage_Pic6hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic7hRef')
      .click('@homepage_Pic7hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic8hRef')
      .click('@homepage_Pic8hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic9hRef')
      .click('@homepage_Pic9hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Pic10hRef')
      .click('@homepage_Pic10hRef');
  },

  '4. Verify ALL Videos on homepage play': (browser) => {
    // locate a video on the homepage
    // select the play button
    // let video play for 15 seconds
    // select pause button
    // End

    let homepage = browser.page.homePage();

    homepage.navigate()
      .waitForElementVisible('@homepage_Vid1hRef', 10000)
      .click('@homepage_Vid1hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Vid2hRef', 10000)
      .click('@homepage_Vid2hRef');

    homepage.navigate()
      .waitForElementVisible('@homepage_Vid3hRef', 10000)
      .click('@homepage_Vid3hRef');
  },

  '5. Confirm that “Inspire your inbox” sends an email to me': (browser) => {

    // Verify "email" text inside of box
    // Enter email information (dummy data from a different page object?)
    // click submit
    // manually check email inbox to verify
    let homepage = browser.page.homePage();

    homepage.navigate()
      .waitForElementVisible('@homepage_InspireInbox')
      .click('@homepage_InspireInbox')
      .setValue('@homepage_InspireInbox', 'testdata@mailinator.com')
      .waitForElementVisible('@homepage_InspireSubmit')
      .click('@homepage_InspireSubmit');

  },

  '6. Verify that Floating footer links function': (browser) => {
    // Verify number of links (3 total links)
    // Click on all three links
    // verify they go to their respective url's
    // navigate back to to homePage

    let homepage = browser.page.homePage();

    homepage.navigate()
      .waitForElementVisible('@homepage_Vid1hRef')
      .click('@homepage_Vid1hRef');
  },

  '7. Verify Terms of Service link': (browser) => {
    // Locate Verify Terms of Service on page
    // Validate Text
    // Click on link
  },

  '8. Verify Privacy Notice Link': (browser) => {
    // Locate Privacy Notice on page
    // Validate Text
    // Click on link
  },

  '9. Verify Feedback Page Link': (browser) => {
    // Locate Verify Feedback on page
    // Validate Text
    // Click on link
  },

  '10. Verify Cookie Preferences link': (browser) => {
    // Locate Privacy Notice on page
    // Validate Text
    // Click on link
    // Wait for popup modal
    // Click (x) in top-right of modal (modal should close)
    // or 
    // Click on "Agree and Proceed" button (modal should close)
  },

  '11. Home Page Select Search Icon': (browser) => {
    let homepage = browser.page.homePage();
    let searchresults = browser.page.searchResultsPage();

    homepage.navigate()
      .waitForElementVisible('@homepage_SearchIcon')
      .click('@homepage_SearchIcon')
      .waitForElementVisible('@homepage_Searchbox')
      .setValue('@homepage_Searchbox', 'Jesus')
      .waitForElementVisible('@homepage_SearchboxButton')
      .click('@homepage_SearchboxButton');

    searchresults
      .waitForElementVisible('@searchresults_collection')
      .assert.visible('@searchresults_collection');
  },

  '12. Select Contact Us (phone icon on header/top-nav bar)': (browser) => {
    // Scroll down to Find a church near you
    // Enter full address information
    // Street, City, State, Zip
    // Click Search button
    // Wait for results
    // Select
  },

  // > BOOK OF MORMON - PAGE --------------------------------------------------------------------------<

  '13. Verify all links on Book of Mormon page': (browser) => {
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

  '14. Play Video on BofM Page': (browser) => {
    // Locate Play button
    // Select Play
    // Select Pause
    // Next Element (what element?) on Page

  },

  '15. Common Questions Drop Downs': (browser) => {
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

  // > FAMILY - PAGE ---------------------------------------------------------------------------------<

  '16. Select “Family is Forever” link in Left PopOut Navigation from home page': (browser) => {
    // Click link
    // Navigate to / beliefs / family
    // Click on “Raising a Strong Family”
    // Click Back
    // Click on Eternal Families
    // Click Back
    // Click on Importance of Families
    // Click Back
    // Verify that “Schedule a Visit” is on page
    // End Test

  },

  '17. Verify that “Explore more topics” exists on Family page': (browser) => {
    //Do the stuff
  },

  '18. Click FORWARD/NEXT on Explore more topics at bottom of Family page': (browser) => {
    //Do the stuff and the things
  },

  // > RELATIONSHIP WITH GOD - PAGE ------------------------------------------------------------------<

  '19. Play 1st video on RWG page': (browser) => {
    // Navigate to page from home page
    // locate element on page
    // play video
    // pause video
  },

  '20. Share video from RWG page': (browser) => {
    // Locate the video on RWG page
    // navigate to below the video
    // select "Share" button
    // Select FB, Twitter, or Email
    // Manually verify Share was sent
  },

  '21. Download video from RWG page': (browser) => {
    // Locate the video on RWG page
    // navigate to below the video
    // select "Download" button
    // Not sure of next steps
  },

  '22. Like video on RWG page': (browser) => {
    // Locate the video on RWG page
    // navigate to below the video
    // select "Share" button
    // Not sure of next steps
  },

  '23. Verify 3 <div> sections on RWG page': (browser) => {

  },

  '24. Play 2nd video on page': (browser) => {

  },

  '25. Verify "Discover the Book of Mormon" section is on RWG page': (browser) => {

  },

  '26. Select "Forgiveness" link in left-nav popout from home page': (browser) => {

  },

  '27. Verify text "Get a free copy of the Holy Bible" is on page': (browser) => {

  },

  // > FORGIVENESS - PAGE ----------------------------------------------------------------------------<

  '28. Verify "Order" element/button is on page': (browser) => {

  },

  '29. Verify "Order" button is Clickable': (browser) => {
    //Is this even possible?  To just do a clickable something or other?
  },

  // > BELONG (WORSHIP WITH US) - PAGE ---------------------------------------------------------------<

  '30. Select "Worship Services" link in left-nav popout': (browser) => {
    // AUTOMATE ME!!!
    // Click on link
    // Navigate to / belong / church - community
    // Click on “Sunday Services”
    // Click Back
    // Click on “What to Expect”
    // Click Back
    // Click on “The Sacrament”
    // Click Back
    // Click on “Four Reasons to Go”
    // Click Back
    // Click “Finding the Right Church”
    // Click Back
    // Click “Becoming a Member”

  },

  '31. Use find a Church Near you': (browser) => {
    // Locate and verify text for “Come worship with us”
    // Verify Text input box says “Enter full address”
    // Enter: “3740 W Market Center Dr, Riverton, UT 84065”
    // Click on Find a Church Near You
    // Verify search results
    // Note: How do I verify the search results ? Do I need Google Maps API or can I work around it ?
    // Verify Text: “Here are some congregations near you”
    // Verify numResults(how do I find them on the page ?)
    // Select Dropdown that shows in results(is this static / dynamic ?)
    // Wait for element visible
    // Click on “Get Directions” text to show a map
    // Browser pops out
    // Select new tab that just popped out
    // Verify the following text exists in the URL(where * = wildcard or regex, hopefully): https://www.google.com/maps/dir/*40.520441*111.976069
    // END TEST

  },

  '32. Use Find a Church Near You flow': (browser) => {
    // Locate and verify text for “Come worship with us”
    // Verify Text input box says “Enter full address”
    // Enter in a valid address
    // Force “Enter” button to be “pressed”
    // Verify search results

  },

  '33. Use Find a Church Near You flow (verify Toast Notification)': (browser) => {
    // Move cursor into input box with “Enter full address”
    // Move cursor out of input box to “body” element or BG image of input box
    // Wait for 3000 - 5000ms
    // Verify that Toast notification shows on screen(visual QA ?)
    // Verify text associated with Toast reads: ! “Please enter a value”
    // End test

  },

  '34. Locate Dropdown that says, "What is it like to be a Mormon? ': (browser) => {
    // Click to Open dropdown
    // Wait for 3000ms
    // Click to Close dropdown 

  },

  '35. Locate dropdown that says, “Why do I need organized religion?” ': (browser) => {
    // Click to Open dropdown
    // Wait for 3000ms
    // Click to Close dropdown 

  },

  '36. “How do I become a Mormon?” ': (browser) => {
    // Click to Open dropdown
    // Wait for 3000ms
    // Click to Close dropdown 

  },

  // > HEAR HIM - PAGE -------------------------------------------------------------------------------<

  '37. Verify video plays all of the way through': (browser) => {
    // Select play button on video
    // Pause video at 73 seconds
    // Select play button to restart
    // Allow video to complete playing

  },

  '38. Verify proper text on page': (browser) => {
    // Verify Section 1
    // Verify text: “Hear Him with your heart instead of your ears“
    // Verify image present in section 1
    // Verify Section 2
    // Verify text: “Hear Him by unplugging and slowing down“
    // Verify image present in section 2
    // Verify Section 3
    // Verify text: “Hear Him in the scriptures“
    // Verify image present in section 3
    // Verify Section 4
    // Verify text: “Hear Him in small and simple ways“
    // Verify image present in section 4
    // *** END TEST SUITE

  },


  // >-------------------------------------------------------------------------------------------<
  // >------------------------------------- End Test Cases  -------------------------------------<
  // >-------------------------------------------------------------------------------------------<

  // >------------------------------------------------------------------------------------------------------------------------------------------<
  // >------------------------------------- Test Teardown Process - still not 100% if it's setup correctly -------------------------------------<
  // >------------------------------------------------------------------------------------------------------------------------------------------<

  afterEach(browser, done) {
    //  > this will get run after every test case <
    done();
  },
  after(browser, done) {
    //  > this will get run ONCE, after all tests have run <
    browser.end();

    driver.stop();
    done();
  }
}