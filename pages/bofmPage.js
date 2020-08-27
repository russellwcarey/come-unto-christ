var bookOfMormonPageNav = {
  bookOfMormonLinks: function () {

    this
      .waitForElementVisible('@bofm_bookOfMormonLink')
      .click('@bofm_bookOfMormonLink')
      .navigate()
      .waitForElementVisible('@bofm_relToBibleLink')
      .click('@bofm_relToBibleLink')
      .navigate()
      .waitForElementVisible('@bofm_thingsToKnowLink')
      .click('@bofm_thingsToKnowLink')
      .navigate()
      .waitForElementVisible('@bofm_whoWroteItLink')
      .click('@bofm_whoWroteItLink')
      .navigate()
      .waitForElementVisible('@bofm_jesusInBofMLink')
      .click('@bofm_jesusInBofMLink')
      .navigate()
      .waitForElementVisible('@bofm_realPeopleLink')
      .click('@bofm_realPeopleLink')
      .navigate()
      .waitForElementVisible('@bofm_Video')
      .click('@bofm_Video')
      .navigate();

    return this;
  },
}

module.exports = {
  url: 'https://www.comeuntochrist.org/beliefs/book-of-mormon',
  commands: [bookOfMormonPageNav],
  elements: {
    bofm_bookOfMormonLink: {
      selector: '//img[@class="titan-image_center"][0]',
      locateStrategy: 'xpath'
    },
    bofm_relToBibleLink: {
      selector: '//img[@class="titan-image_center"][1]',
      locateStrategy: 'xpath'
    },
    bofm_thingsToKnowLink: {
      selector: '//img[@class="titan-image_center"][2]',
      locateStrategy: 'xpath'
    },
    bofm_whoWroteItLink: {
      selector: '//img[@class="titan-image_center"][3]',
      locateStrategy: 'xpath'
    },
    bofm_jesusInBofMLink: {
      selector: '//img[@class="titan-image_center"][4]',
      locateStrategy: 'xpath'
    },
    bofm_realPeopleLink: {
      selector: '//img[@class="titan-image_center"][5]',
      locateStrategy: 'xpath'
    },
    //this is going to require an iframe
    bofm_Video: {
      selector: '//img[@class="titan-image_center"][6]',
      locateStrategy: 'xpath'
    },
  }
}