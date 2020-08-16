const popoutNavCommands = {
  toggleNav() {
    this.waitForElementVisible('.page-header-nav_openIcon')
      .click('.page-header-nav_openIcon');

    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'https://www.comeuntochrist.org',
  commands: [popoutNavCommands],
  elements: {
    hamburgerIcon: {
      selector: '.page-header-nav_openIcon',
      locateStrategy: 'css selector'
    },
    believe_FollowingJesus: {
      selector: '.page-header-nav_container > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    belong_WorshipServices: {
      selector: '.page-header-nav_container > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
      locateStrategy: 'css selector'
    }
  }
}