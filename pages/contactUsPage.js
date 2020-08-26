var contactUsNav = {
  submitAddressSearch: function (destinationSearch, destinationResults) {

    this
      .waitForElementVisible('@contactuspage_locationInput')
      .setValue('@contactuspage_locationInput', destinationSearch)
      .waitForElementVisible('@contactuspage_searchButton')
      .click('@contactuspage_searchButton')
      .verify.elementPresent('@contactuspage_Assert', `"${destinationResults}"`);

    return this;
  }
}

module.exports = {
  url: 'https://www.comeuntochrist.org/contact-us',
  commands: [contactUsNav],
  elements: {
    contactuspage_locationInput: {
      selector: '//input[@type="text"][0]',
      locateStrategy: 'xpath'
    },
    contactuspage_searchButton: {
      selector: '//button[@data-type="button"][1]',
      locateStrategy: 'xpath'
    }
  }
}