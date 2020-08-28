var bookOfMormonPageNav = {
  bookOfMormonLinks: function () {

    this
      .navigate()
      .waitForElementVisible('@bofm_bookOfMormonLink')
      .assert.elementPresent('@bofm_bookOfMormonLink')
      .click('@bofm_bookOfMormonLink')
      .navigate()
      .waitForElementVisible('@bofm_relToBibleLink')
      .assert.elementPresent('@bofm_relToBibleLink')
      .click('@bofm_relToBibleLink')
      .navigate()
      .waitForElementVisible('@bofm_thingsToKnowLink')
      .assert.elementPresent('@bofm_thingsToKnowLink')
      .click('@bofm_thingsToKnowLink')
      .navigate()
      .waitForElementVisible('@bofm_whoWroteItLink')
      .assert.elementPresent('@bofm_whoWroteItLink')
      .click('@bofm_whoWroteItLink')
      .navigate()
      .waitForElementVisible('@bofm_jesusInBofMLink')
      .assert.elementPresent('@bofm_jesusInBofMLink')
      // ToDo: I currently do not know why this particular step is failing. Look into later.
      // .click('@bofm_jesusInBofMLink')
      .navigate()
      .waitForElementVisible('@bofm_realPeopleLink')
      .assert.elementPresent('@bofm_realPeopleLink')
      .click('@bofm_realPeopleLink')
      // .navigate()
      // // .waitForElementVisible('@bofm_Video')
      // // .click('@bofm_Video')
      ;
    return this;
  },
  bookOfMormonDrawers: function () {
    this
      .navigate()
      // ToDo: Numerous troubleshooting steps taken to narrow down why test fails
      // Not sure if steps are missing, or nightwatch - look into later
      .waitForElementVisible('@bofm_DrawerContainerBibleClosed')
      .click('@bofm_DrawerContainerBibleClosed')
      .waitForElementVisible('@bofm_DrawerContainerBibleOpened')
      .click('@bofm_DrawerContainerBibleOpened')
      .waitForElementVisible('@bofm_DrawerContainerJesusClosed')
      .click('@bofm_DrawerContainerJesusClosed')
      .waitForElementVisible('@bofm_DrawerContainerJesusOpened')
      .click('@bofm_DrawerContainerJesusOpened')
      .waitForElementVisible('@bofm_DrawerContainerChurchSvcClosed')
      .click('@bofm_DrawerContainerChurchSvcClosed')
      .waitForElementVisible('@bofm_DrawerContainerChurchSvcOpened')
      .click('@bofm_DrawerContainerChurchSvcOpened')
      ;

    return this;
  }
}

module.exports = {
  url: 'https://www.comeuntochrist.org/beliefs/book-of-mormon',
  commands: [bookOfMormonPageNav],
  elements: {
    bofm_bookOfMormonLink: {
      selector: '/html/body/section/div/div/div[1]/div/a',
      //selector: '/html/body/section/div/div/div[1]/div/a/div[1]/div/div/div/div/div/picture/img',
      locateStrategy: 'xpath'
    },
    bofm_relToBibleLink: {
      selector: '/html/body/section/div/div/div[2]/div/a',
      //selector: '/html/body/section/div/div/div[2]/div/a/div[1]/div/div/div/div/div/picture/img',
      locateStrategy: 'xpath'
    },
    bofm_thingsToKnowLink: {
      selector: '/html/body/section/div/div/div[3]/div/a',
      //selector: '/html/body/section/div/div/div[3]/div/a/div[1]/div/div/div/div/div/picture/img',
      locateStrategy: 'xpath'
    },
    bofm_whoWroteItLink: {
      selector: '/html/body/section/div/div/div[4]/div/a',
      //selector: '//img[@class="titan-image_center"][3]',
      locateStrategy: 'xpath'
    },
    bofm_jesusInBofMLink: {
      //selector: '/html/body/section/div/div/div[5]/div/a/div[1]/div/div/div/div/div/picture/img',
      selector: '/html/body/section/div/div/div[5]/div/a',
      //selector: '//img[@class="titan-image_center"][4]',
      locateStrategy: 'xpath'
    },
    bofm_realPeopleLink: {
      selector: '/html/body/section/div/div/div[6]/div/a',
      //selector: '//img[@class="titan-image_center"][5]',
      locateStrategy: 'xpath'
    },
    //this is going to require an iframe
    bofm_Video: {
      selector: '//img[@class="titan-image_center"][6]',
      locateStrategy: 'xpath'
    },
    // Problems with the next 6 selectors
    // CSS, Xpath, implicit, or explicit paths don't work
    bofm_DrawerContainerBibleOpened: {
      //selector: '//button[@class="drawer_button"][1]',
      selector: '//*/div[@data-body-display-state="opened"][0]',
      //selector: '/html/body/div[8]/div/div[1]/div/button',
      locateStrategy: 'xpath'
    },
    bofm_DrawerContainerBibleClosed: {
      //selector: '//button[@class="drawer_button"][1]',
      selector: '//*/div[@data-body-display-state="closed"][0]',
      //selector: '/html/body/div[8]/div/div[1]/div/button',
      locateStrategy: 'xpath'
    },
    bofm_DrawerContainerJesusOpened: {
      //selector: '//button[@class="drawer_button"][2]',
      selector: '//*/div[@data-body-display-state="opened"][1]',
      //selector: '/html/body/div[8]/div/div[2]/div/button',
      locateStrategy: 'xpath'
    },
    bofm_DrawerContainerJesusClosed: {
      //selector: '//button[@class="drawer_button"][2]',
      selector: '//*/div[@data-body-display-state="closed"][1]',
      //selector: '/html/body/div[8]/div/div[2]/div/button',
      locateStrategy: 'xpath'
    },
    bofm_DrawerContainerChurchSvcOpened: {
      //selector: '//button[@class="drawer_button"][3]',
      selector: '//*/div[@data-body-display-state="opened"][2]',
      // selector: '/html/body/div[8]/div/div[3]/div/button',
      locateStrategy: 'xpath'
    },
    bofm_DrawerContainerChurchSvcClosed: {
      //selector: '//button[@class="drawer_button"][3]',
      selector: '//*/div[@data-body-display-state="closed"][2]',
      // selector: '/html/body/div[8]/div/div[3]/div/button',
      locateStrategy: 'xpath'
    },
  }
}