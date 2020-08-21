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
      selector: '.emphasized-media-tile_left > a:nth-child(1)',
      locateStrategy: 'css selector'
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
      //selector: '/html/body/div[1]/div/div[4]/button'
      //ytp-large-play-button-bg
      //$x('//path[@class="ytp-large-play-button-bg"]')
      locateStrategy: 'xpath'
    },
    homepage_Vid3hRef: {
      // player_uid is a dynamic value. Need to find alternate solution to find the element
      selector: '//*[@id="player_uid_480008982_1"]/div[4]/button',
      locateStrategy: 'xpath'
    },
    homepage_InspireInbox: {
      selector: 'body > div.gvsg-grid_constraint.gvsg-grid_uncontrolled.spacing_no-spacing.spacing_desktop-no-spacing > div > footer > div.simple-sign-up_simpleSignUp.layout_layout.layout_outer.layout_hasBg.layout_no-spacing.layout_pt-separate-1-64px.layout_pb-separate-1-64px.layout_bw-uncontrolled.layout_bw-mobile-uncontrolled > div.layout_layout.layout_inner.layout_cw-normal.layout_cw-mobile-normal > div > div.simple-sign-up_form > div > div > div.form-builder_primaryForm > form > div > div.form-builder_formInputs.undefined > div > input',
      locateStrategy: 'css selector'
    },
    homepage_InspireSubmit: {
      selector: 'body > div.gvsg-grid_constraint.gvsg-grid_uncontrolled.spacing_no-spacing.spacing_desktop-no-spacing > div > footer > div.simple-sign-up_simpleSignUp.layout_layout.layout_outer.layout_hasBg.layout_no-spacing.layout_pt-separate-1-64px.layout_pb-separate-1-64px.layout_bw-uncontrolled.layout_bw-mobile-uncontrolled > div.layout_layout.layout_inner.layout_cw-normal.layout_cw-mobile-normal > div > div.simple-sign-up_form > div > div > div.form-builder_primaryForm > form > div > div:nth-child(11) > button',
      locateStrategy: 'css selector'
    },
    homepage_privacyNoticeLink: {
      selector: 'body > div.gvsg-grid_constraint.gvsg-grid_uncontrolled.spacing_no-spacing.spacing_desktop-no-spacing > div > footer > div.footer_curbed.curbed_curbed > div.footer_links.link-list_footerLinks2 > nav > div > ul > li:nth-child(2) > a',
      locateStrategy: 'css selector'
    },
    homepage_termsOfUseLink: {
      // html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[1]/a
      // body > div.gvsg-grid_constraint.gvsg-grid_uncontrolled.spacing_no-spacing.spacing_desktop-no-spacing > div > footer > div.footer_curbed.curbed_curbed > div.footer_links.link-list_footerLinks2 > nav > div > ul > li:nth-child(1) > a
      selector: 'nav.undefined > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    homepage_FeedbackLink: {
      selector: 'body > div.gvsg-grid_constraint.gvsg-grid_uncontrolled.spacing_no-spacing.spacing_desktop-no-spacing > div > footer > div.footer_curbed.curbed_curbed > div.footer_links.link-list_footerLinks2 > nav > div > ul > li:nth-child(3) > a',
      locateStrategy: 'css selector'
    },
    homepage_cookiePrefs: {
      //selector is dynamically updated - finding new method for locating selector
      selector: '/html/body/div[13]/div/footer/div[3]/div[3]/nav/div/ul/li[4]/a/a',
      locateStrategy: 'xpath'
    }

  }
}