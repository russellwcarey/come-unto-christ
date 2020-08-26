var bookOfMormonPageNav = {
  bookOfMormonLinks: function () {

    this
      .waitForElementVisible('@bofm_bookOfMormonLink')
      .waitForElementVisible('@bofm_relToBibleLink')
      .click('@bofm_relToBibleLink');

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
    bofm_Video: {
      selector: '//img[@class="titan-image_center"][6]',
      locateStrategy: 'xpath'
    },
  }
}