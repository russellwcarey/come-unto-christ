var popoutPageNav = {

  leftNavCheck: function () {
    this
      .click('@hamburgerIcon')
      .waitForElementVisible('@believe_BelieveMain')
      .assert.elementPresent('@believe_BelieveMain')
      .assert.containsText('@believe_BelieveMain', 'Believe')
      //.expect.element('@believe_BelieveMain').text.to.equal('Believe')

      .waitForElementVisible('@believe_FollowingJesus')
      .assert.elementPresent('@believe_FollowingJesus')
      .assert.containsText('@believe_FollowingJesus', 'Following Jesus')
      //.expect.element('@believe_FollowingJesus').text.to.contain('Following Jesus')

      .waitForElementVisible('@believe_TheBookofMormon')
      .assert.elementPresent('@believe_TheBookofMormon')
      .assert.containsText('@believe_TheBookofMormon', 'The Book of Mormon')
      //.expect.element('@believe_TheBookofMormon').text.to.equal('The Book of Mormon')

      .waitForElementVisible('@believe_TheBible')
      .assert.elementPresent('@believe_TheBible')
      .assert.containsText('@believe_TheBible', 'The Bible')
      //.expect.element('@believe_TheBible').text.to.equal('The Bible')

      .waitForElementVisible('@believe_FamilyIsForever')
      .assert.elementPresent('@believe_FamilyIsForever')
      .assert.containsText('@believe_FamilyIsForever', 'Family is Forever')
      //.expect.element('@believe_FamilyIsForever').text.to.equal('Family is Forever')

      .waitForElementVisible('@believe_PurposeOfLife')
      .assert.elementPresent('@believe_PurposeOfLife')
      .assert.containsText('@believe_PurposeOfLife', 'Purpose of Life')
      //.expect.element('@believe_PurposeOfLife').text.to.equal('Purpose of Life')

      .waitForElementVisible('@believe_ComingCloser')
      .assert.elementPresent('@believe_ComingCloser')
      .assert.containsText('@believe_ComingCloser', 'Coming Closer to God')
      //.expect.element('@believe_ComingCloser').text.to.equal('Coming Closer to God')

      .waitForElementVisible('@believe_JesusChristChurch')
      .assert.elementPresent('@believe_JesusChristChurch')
      .assert.containsText('@believe_JesusChristChurch', 'Jesus Christ\'s Church')
      //.expect.element('@believe_JesusChristChurch').text.to.equal('Jesus Christ\'s Church')

      .waitForElementVisible('@believe_Forgiveness')
      .assert.elementPresent('@believe_Forgiveness')
      .assert.containsText('@believe_Forgiveness', 'Forgiveness')
      //.expect.element('@believe_Forgiveness').text.to.equal('Forgiveness')

      .waitForElementVisible('@believe_LifeAfterDeath')
      .assert.elementPresent('@believe_LifeAfterDeath')
      .assert.containsText('@believe_LifeAfterDeath', 'Life After Death')
      //.expect.element('@believe_LifeAfterDeath').text.to.equal('Life After Death')

      .waitForElementVisible('@believe_Baptism')
      .assert.elementPresent('@believe_Baptism')
      .assert.containsText('@believe_Baptism', 'Baptism')
      //.expect.element('@believe_Baptism').text.to.equal('Baptism')

      .waitForElementVisible('@believe_Temples')
      .assert.elementPresent('@believe_Temples')
      .assert.containsText('@believe_Temples', 'Temples')
      //.expect.element('@believe_Temples').text.to.equal('Temples')

      .waitForElementVisible('@believe_HealthyLiving')
      .assert.elementPresent('@believe_HealthyLiving')
      .assert.containsText('@believe_HealthyLiving', 'Healthy Living')
      //.expect.element('@believe_HealthyLiving').text.to.equal('Healthy Living')

      .waitForElementVisible('@belong_BelongMain')
      .assert.elementPresent('@belong_BelongMain')
      .assert.containsText('@belong_BelongMain', 'Belong')
      //.expect.element('@belong_BelongMain').text.to.equal('Belong')

      .waitForElementVisible('@belong_WorshipServices')
      .assert.elementPresent('@belong_WorshipServices')
      .assert.containsText('@belong_WorshipServices', 'Worship Services')
      //.expect.element('@belong_WorshipServices').text.to.equal('Worship Services')

      .waitForElementVisible('@belong_PeopleAndPrograms')
      .assert.elementPresent('@belong_PeopleAndPrograms')
      .assert.containsText('@belong_PeopleAndPrograms', 'People and Programs')
      //.expect.element('@belong_PeopleAndPrograms').text.to.equal('People and Programs')

      .waitForElementVisible('@belong_Missionaries')
      .assert.elementPresent('@belong_Missionaries')
      .assert.containsText('@belong_Missionaries', 'Missionaries')
      //.expect.element('@belong_Missionaries').text.to.equal('Missionaries')

      .waitForElementVisible('@become_BecomeMain')
      .assert.elementPresent('@become_BecomeMain')
      .assert.containsText('@become_BecomeMain', 'Become')
      //.expect.element('@become_BecomeMain').text.to.equal('Become')

      .waitForElementVisible('@become_ThisIsChurch')
      .assert.elementPresent('@become_ThisIsChurch')
      .assert.containsText('@become_ThisIsChurch', 'This is Church')
      //.expect.element('@become_ThisIsChurch').text.to.equal('This is Church')

      .waitForElementVisible('@become_LightTheWorld')
      .assert.elementPresent('@become_LightTheWorld')
      .assert.containsText('@become_LightTheWorld', 'Light the World')
      //.expect.element('@become_LightTheWorld').text.to.equal('Light the World')

      .waitForElementVisible('@become_HearHim')
      .assert.elementPresent('@become_HearHim')
      .assert.containsText('@become_HearHim', 'Hear Him')
      //.expect.element('@become_HearHim').text.to.equal('Hear Him')

      .waitForElementVisible('@become_BecauseOfHim')
      .assert.elementPresent('@become_BecauseOfHim')
      .assert.containsText('@become_BecauseOfHim', 'Because of Him')
      //.expect.element('@become_BecauseOfHim').text.to.equal('Because of Him')

      .waitForElementVisible('@contact_ContactMain')
      .assert.elementPresent('@contact_ContactMain')
      .assert.containsText('@contact_ContactMain', 'Contact')
      //.expect.element('@contact_ContactMain').text.to.equal('Contact')

      .waitForElementVisible('@contact_FreeBofM')
      .assert.elementPresent('@contact_FreeBofM')
      .assert.containsText('@contact_FreeBofM', 'Free Book of Mormon')
      //.expect.element('@contact_FreeBofM').text.to.equal('Free Book of Mormon')

      .waitForElementVisible('@contact_MeetTheMish')
      .assert.elementPresent('@contact_MeetTheMish')
      .assert.containsText('@contact_MeetTheMish', 'Meet with Missionaries')
      //.expect.element('@contact_MeetTheMish').text.to.equal('Meet with Missionaries')

      .waitForElementVisible('@contact_FindAChurch')
      .assert.elementPresent('@contact_FindAChurch')
      .assert.containsText('@contact_FindAChurch', 'Find a Church')
      //.expect.element('@contact_FindAChurch').text.to.equal('Find a Church')

      .waitForElementVisible('@contact_Email')
      .assert.elementPresent('@contact_Email')
      .assert.containsText('@contact_Email', 'Email')
      //.expect.element('@contact_Email').text.to.equal('Email')
      ;
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
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/a',
      locateStrategy: 'xpath'
    },
    believe_FollowingJesus: {
      selector: '/html/body/header/nav/div/div[2]/div/div[2]/div[1]/ul/li[1]/ul/li[1]/a',
      locateStrategy: 'xpath'
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