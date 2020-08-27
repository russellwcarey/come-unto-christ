//var homepageAsset = require('../assets/homePageAsset');

var homePageNav = {
  homePagePopOutNav: function () {
    this
      .waitForElementVisible('@homepage_ChurchWordMark')
      .click('@homepage_ChurchWordMark');

    return this;
  },
  clickImage1: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic1hRef')
      .click('@homepage_Pic1hRef');

    return this;
  },
  clickImage2: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic2hRef')
      .click('@homepage_Pic2hRef');

    return this;
  },
  clickImage3: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic3hRef')
      .click('@homepage_Pic3hRef');

    return this;
  },
  clickImage4: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic4hRef')
      .click('@homepage_Pic4hRef');

    return this;
  },
  clickImage5: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic5hRef')
      .click('@homepage_Pic5hRef');

    return this;
  },
  clickImage6: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic6hRef')
      .click('@homepage_Pic6hRef');

    return this;
  },
  clickImage7: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic7hRef')
      .click('@homepage_Pic7hRef');

    return this;
  },
  clickImage8: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic8hRef')
      .click('@homepage_Pic8hRef');

    return this;
  },
  clickImage9: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic9hRef')
      .click('@homepage_Pic9hRef');

    return this;
  },
  clickImage10: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_Pic10hRef')
      .click('@homepage_Pic10hRef');

    return this;
  },
  //5. 
  sendEmailToMe: function (emailAddress) {
    this
      .navigate()
      .waitForElementVisible('@homepage_InspireInboxInput')
      .click('@homepage_InspireInboxInput')
      .setValue('@homepage_InspireInboxInput', 'russellwcarey.spam+' + (new Date().getMilliseconds()) + '@gmail.com')
      //.setValue('@homepage_InspireInboxInput', 'russellwcarey.spam@gmail.com')
      .waitForElementVisible('@homepage_InspireSubmit')
      //.click('@homepage_InspireSubmit')
      .submitForm('@homepage_InspireSubmit')
      .waitForElementVisible('@homepage_InspireConfirm')
      .assert.containsText('@homepage_InspireConfirm', 'Your request has been submitted!');
    //This test shows: "Error while running .clickElement() protocol action: clement click intercepted:..."
    //Will come back to it if there is time
    return this;
  },

  //6. iFrame - will run if I can fix it - very broken

  //7. Verify Terms of Service link
  verifyTOSLink: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_termsOfUseLink')
      .assert.containsText('@homepage_termsOfUseLink', 'Terms of Use')
    // .getText('@homepage_termsOfUseLink', ' ')
    // .click('@homepage_termsOfUseLink');
    return this;
  },

  //8. 
  verifyPNLink: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_privacyNoticeLink')
      .assert.containsText('@homepage_privacyNoticeLink', 'Privacy Notice');
    // .click('@homepage_privacyNoticeLink');
    return this;
  },

  //9.
  verifyFPLink: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_FeedbackLink')
      .assert.containsText('@homepage_FeedbackLink', 'Feedback');
    //.click('@homepage_FeedbackLink');
    return this;
  },
  //10.
  verifyCPLink: function () {
    this
      .navigate()
      .waitForElementVisible('@homepage_cookiePrefs')
      .assert.containsText('@homepage_cookiePrefs', 'Cookie Preferences');
    // .click('@homepage_cookiePrefs')
    // .waitForElementVisible('@homepage_cookieMoreInfo')
    // .click('@homepage_cookieMoreInfo')
    // .waitForElementVisible('@homepage_requiredCookiesToggle')
    // .waitForElementVisible('@homepage_functionalCookiesToggle')
    // .waitForElementVisible('@homepage_advertisingCookiesToggle');
    return this;
  },

  //11. Home Page Select Search Icon
  searchHomePage: function (destinationSearch, destinationResults) {

    this
      .navigate()
      .waitForElementVisible('@homepage_SearchIcon')
      .click('@homepage_SearchIcon')
      .waitForElementVisible('@homepage_Searchbox')
      .setValue('@homepage_Searchbox', destinationSearch)
      .waitForElementVisible('@homepage_SearchboxButton')
      .click('@homepage_SearchboxButton')
      .verify.elementPresent('@searchLocation', `"${destinationResults}"`);

    return this;
  },
  contactUsClick: function () {
    this
      .waitForElementVisible('@homepage_contactUsIcon')
      .click('@homepage_contactUsIcon');

    return this;
  }
}

module.exports = {
  url: 'https://www.comeuntochrist.org',
  commands: [homePageNav],
  elements: {
    homepage_ChurchWordMark: {
      selector: '#English_x5F_OUTLINE_x5F_2020',
      locateStrategy: 'css selector'
    },
    homepage_SearchIcon: {
      selector: '.page-header-nav_openSearch',
      locateStrategy: 'css selector'
    },
    homepage_Searchbox: {
      selector: '.search-form_input',
      locateStrategy: 'css selector'
    },
    homepage_SearchboxButton: {
      selector: '//*/button[@data-type="button"][0]',
      //$x('//*/button[@data-type="button"]')[0]
      locateStrategy: 'xpath'
    },
    homepage_Pic1hRef: {
      selector: '/html/body/div[5]/div/div/div[1]/a',
      locateStrategy: 'xpath'
    },
    homepage_Pic2hRef: {
      selector:
        'div.emphasized-media-tiles_emt:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Pic3hRef: {
      selector:
        'div.emphasized-media-tiles_emt:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Pic4hRef: {
      selector:
        'div.emphasized-media-tiles_emt:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Pic5hRef: {
      selector:
        'div.emphasized-media-tiles_emt:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Pic6hRef: {
      selector:
        'div.emphasized-media-tiles_emt:nth-child(13) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Pic7hRef: {
      selector: 'div.emphasized-media-tile_mobileSmall:nth-child(3) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Pic8hRef: {
      selector: 'div.emphasized-media-tile_mobileSmall:nth-child(4) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Pic9hRef: {
      selector: 'div.emphasized-media-tile_defaultTile:nth-child(5) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Pic10hRef: {
      selector: 'div.emphasized-media-tile_defaultTile:nth-child(6) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_Vid1hRef: {
      // player_uid is a dynamic value. Need to find alternate solution to find the element
      selector: '//*[@id="player_uid_361859360_1"]/div[4]/button',
      locateStrategy: 'xpath'
    },
    homepage_Vid2hRef: {
      // player_uid is a dynamic value. Need to find alternate solution to find the element
      selector: '//*[@id="player_uid_336160613_1"]/div[4]/button',
      locateStrategy: 'xpath'
    },
    homepage_Vid3hRef: {
      // player_uid is a dynamic value. Need to find alternate solution to find the element
      selector: '//*[@id="player_uid_480008982_1"]/div[4]/button',
      locateStrategy: 'xpath'
    },
    homepage_InspireInboxInput: {
      selector: '/html/body/div[13]/div/footer/div[1]/div[2]/div/div[2]/div/div/div[1]/form/div/div[1]/div/input',
      //selector: '//input[@name="email"][0]',
      locateStrategy: 'xpath'
    },
    homepage_InspireSubmit: {
      selector: '/html/body/div[13]/div/footer/div[1]/div[2]/div/div[2]/div/div/div[1]/form/div/div[2]/button',
      //selector: '//*/button["button_button"][8]',
      //selector: '//button["submit"][8]',
      locateStrategy: 'xpath'
    },
    homepage_InspireConfirm: {
      //needs to contain the text "Your request has been submitted!"
      selector: '/html/body/div[13]/div/footer/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div/div/div[1]',
      //selector: '//div["confirmation-state_header typography_h1"][262]',
      locateStrategy: 'xpath'
    },
    homepage_termsOfUseLink: {
      selector: '/html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[1]/a',
      //selector: '//*/a["undefinednull"][120]',
      locateStrategy: 'xpath'
    },
    homepage_privacyNoticeLink: {
      selector: '/html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[2]/a',
      //selector: '//*/a["undefinednull"][121]',
      locateStrategy: 'xpath'
    },
    homepage_FeedbackLink: {
      selector: '/html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[3]/a',
      //selector: '//*/a["undefinednull"][122]',
      locateStrategy: 'xpath'
    },
    homepage_cookiePrefs: {
      //selector is dynamically updated - finding new method for locating selector
      // //*[@id="icon-id0019024381176045657"] <-- dumb auto gen link ids
      selector: '/html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[4]/a/a',
      //   //*[@id="icon-id03353116383688858"]
      //  //*[@id="teconsent"]
      locateStrategy: 'xpath'
    },
    homepage_cookieAgreeAndProceed: {
      selector: '/html/body/div[8]/div[1]/div/div[2]/div[2]/a[1]',
      locateStrategy: 'xpath'
    },
    homepage_cookieMoreInfo: {
      selector: '/html/body/div[8]/div[1]/div/div[2]/div[2]/a[2]',
      locateStrategy: 'xpath'
    },
    homepage_cookieApproveSubmitPreferences: {
      selector: '/html/body/div[8]/div[1]/div/div[5]/a[2]',
      locateStrategy: 'xpath'
    },
    homepage_requiredCookiesToggle: {
      selector: 'body > div:nth-child(16) > div.mainContent > div > div:nth-child(3) > div.left > div.options > div:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_functionalCookiesToggle: {
      selector: 'body > div:nth-child(16) > div.mainContent > div > div:nth-child(3) > div.left > div.options > div:nth-child(2)',
      locateStrategy: 'css selector'
    },
    homepage_advertisingCookiesToggle: {
      selector: 'body > div:nth-child(16) > div.mainContent > div > div:nth-child(3) > div.left > div.options > div:nth-child(3)',
      locateStrategy: 'css selector'
    },
    homepage_contactUsIcon: {
      selector: '.page-header-nav_headerIcon',
      locateStrategy: 'css selector'
    }
  }
}