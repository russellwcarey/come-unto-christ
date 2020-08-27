
var popoutPageNav = {

  leftNavCheck: function () {
    this
      .click('@hamburgerIcon')
      .waitForElementVisible('@believe_BelieveMain')
      .expect.element('@believe_BelieveMain').text.to.equal('Believe')
      .waitForElementVisible('believe_FollowingJesus')
      .expect.element('@believe_FollowingJesus').text.to.equal('Following Jesus')
      .waitForElementVisible('believe_TheBookofMormon')
      .expect.element('@believe_TheBookofMormon').text.to.equal('The Book of Mormon')
      .waitForElementVisible('believe_TheBible')
      .expect.element('@believe_TheBible').text.to.equal('The Bible')
      .waitForElementVisible('believe_FamilyIsForever')
      .expect.element('@believe_FamilyIsForever').text.to.equal('Family is Forever')
      .waitForElementVisible('believe_PurposeOfLife')
      .expect.element('@believe_PurposeOfLife').text.to.equal('Purpose of Life')
      .waitForElementVisible('believe_ComingCloser')
      .expect.element('@believe_ComingCloser').text.to.equal('Coming Closer to God')
      .waitForElementVisible('believe_JesusChristChurch')
      .expect.element('@believe_JesusChristChurch').text.to.equal('Jesus Christ\'s Church')
      .waitForElementVisible('believe_Forgiveness')
      .expect.element('@believe_Forgiveness').text.to.equal('Forgiveness')
      .waitForElementVisible('believe_LifeAfterDeath')
      .expect.element('@believe_LifeAfterDeath').text.to.equal('Life After Death')
      .waitForElementVisible('believe_Baptism')
      .expect.element('@believe_Baptism').text.to.equal('Baptism')
      .waitForElementVisible('believe_Temples')
      .expect.element('@believe_Temples').text.to.equal('Temples')
      .waitForElementVisible('believe_HealthyLiving')
      .expect.element('@believe_HealthyLiving').text.to.equal('Healthy Living')
      .waitForElementVisible('belong_BelongMain')
      .expect.element('@belong_BelongMain').text.to.equal('Belong')
      .waitForElementVisible('belong_WorshipServices')
      .expect.element('@belong_WorshipServices').text.to.equal('Worship Services')
      .waitForElementVisible('belong_PeopleAndPrograms')
      .expect.element('@belong_PeopleAndPrograms').text.to.equal('People and Programs')
      .waitForElementVisible('belong_Missionaries')
      .expect.element('@belong_Missionaries').text.to.equal('Missionaries')
      .waitForElementVisible('become_BecomeMain')
      .expect.element('@become_BecomeMain').text.to.equal('Become')
      .waitForElementVisible('become_ThisIsChurch')
      .expect.element('@become_ThisIsChurch').text.to.equal('This is Church')
      .waitForElementVisible('become_LightTheWorld')
      .expect.element('@become_LightTheWorld').text.to.equal('Light the World')
      .waitForElementVisible('become_HearHim')
      .expect.element('@become_HearHim').text.to.equal('Hear Him')
      .waitForElementVisible('become_BecauseOfHim')
      .expect.element('@become_BecauseOfHim').text.to.equal('Because of Him')
      .waitForElementVisible('contact_ContactMain')
      .expect.element('@contact_ContactMain').text.to.equal('Contact')
      .waitForElementVisible('contact_FreeBofM')
      .expect.element('@contact_FreeBofM').text.to.equal('Free Book of Mormon')
      .waitForElementVisible('contact_MeetTheMish')
      .expect.element('@contact_MeetTheMish').text.to.equal('Meet with Missionaries')
      .waitForElementVisible('@contact_FindAChurch')
      .expect.element('@contact_FindAChurch').text.to.equal('Find a Church')
      .waitForElementVisible('@contact_Email')
      .expect.element('@contact_Email').text.to.equal('Email');

    return this
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
      //selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/a',
      //locateStrategy: 'xpath' 
      selector: '.page-header-nav_container > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)',
      locateStrategy: 'css selector'
    },
    believe_FollowingJesus: {
      //selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[1]/a',
      //locateStrategy: 'xpath'
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