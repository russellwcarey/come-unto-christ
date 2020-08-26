module.exports = {
  url: 'https://www.comeuntochrist.org',
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
      selector: 'button.button_button:nth-child(4)',
      locateStrategy: 'css selector'
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
      locateStrategy: 'xpath'
    },
    homepage_InspireSubmit: {
      selector: '/html/body/div[13]/div/footer/div[1]/div[2]/div/div[2]/div/div/div[1]/form/div/div[2]/button',
      locateStrategy: 'xpath'
    },
    homepage_termsOfUseLink: {
      selector: '/html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[1]/a',
      locateStrategy: 'xpath'
    },
    homepage_privacyNoticeLink: {
      selector: '/html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[2]/a',
      locateStrategy: 'xpath'
    },
    homepage_FeedbackLink: {
      selector: '/html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[3]/a',
      locateStrategy: 'xpath'
    },
    homepage_cookiePrefs: {
      //selector is dynamically updated - finding new method for locating selector
      selector: '//*[@id="teconsent"]',
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