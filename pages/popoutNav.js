
var popoutPageNav = {

  leftNavCheck: function () {
    this
      .click('@hamburgerIcon')
      .waitForElementVisible('@believe_BelieveMain')
      .expect.element('@believe_BelieveMain').text.to.equal('Believe');

    return this;
  }
}

module.exports = {
  url: 'https://www.comeuntochrist.org',
  commands: [popoutPageNav],
  elements: {
    hamburgerIcon: {
      selector: '.page-header-nav_openIcon',
      locateStrategy: 'css selector'
    },
    believe_BelieveMain: {
      selector: '.page-header-nav_container > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    believe_FollowingJesus: {
      selector: '.page-header-nav_container > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    belong_WorshipServices: {
      selector: '.page-header-nav_container > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    become_ThisIsChurch: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[3]/ul/li[1]/a',
      locateStrategy: 'xpath'
    }
  }
}