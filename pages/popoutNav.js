
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
    believe_TheBookofMormon: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[2]/a',
      locateStrategy: 'xpath'
    },
    believe_TheBible: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[3]/a',
      locateStrategy: 'xpath'
    },
    believe_FamilyIsForever: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[4]/a',
      locateStrategy: 'xpath'
    },
    believe_PurposeOfLife: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[5]/a',
      locateStrategy: 'xpath'
    },
    believe_ComingCloser: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[6]/a',
      locateStrategy: 'xpath'
    },
    believe_JesusChristChurch: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[7]/a',
      locateStrategy: 'xpath'
    },
    believe_Forgiveness: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[8]/a',
      locateStrategy: 'xpath'
    },
    believe_LifeAfterDeath: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[9]/a',
      locateStrategy: 'xpath'
    },
    believe_Baptism: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[10]/a',
      locateStrategy: 'xpath'
    },
    believe_Temples: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[11]/a',
      locateStrategy: 'xpath'
    },
    believe_HealthyLiving: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[12]/a',
      locateStrategy: 'xpath'
    },
    belong_BelongMain: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[2]/a',
      locateStrategy: 'xpath'
    },
    belong_WorshipServices: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[2]/ul/li[1]/a',
      locateStrategy: 'xpath'
    },
    belong_PeopleAndPrograms: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[2]/ul/li[2]/a',
      locateStrategy: 'xpath'
    },
    belong_Missionaries: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[2]/ul/li[3]/a',
      locateStrategy: 'xpath'
    },
    become_BecomeMain: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[3]/a',
      locateStrategy: 'xpath'
    },
    become_ThisIsChurch: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[3]/ul/li[1]/a',
      locateStrategy: 'xpath'
    },
    become_LightTheWorld: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[3]/ul/li[2]/a',
      locateStrategy: 'xpath'
    },
    become_HearHim: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[3]/ul/li[3]/a',
      locateStrategy: 'xpath'
    },
    become_BecauseOfHim: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[3]/ul/li[4]/a',
      locateStrategy: 'xpath'
    },
    contact_ContactMain: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[4]/a',
      locateStrategy: 'xpath'
    },
    contact_FreeBofM: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[4]/ul/li[1]/a',
      locateStrategy: 'xpath'
    },
    contact_MeetTheMish: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[4]/ul/li[2]/a',
      locateStrategy: 'xpath'
    },
    contact_FindAChurch: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[4]/ul/li[3]/a',
      locateStrategy: 'xpath'
    },
    contact_Email: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[4]/ul/li[4]/a',
      locateStrategy: 'xpath'
    }

  }
}