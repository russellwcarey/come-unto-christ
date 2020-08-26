module.exports = {
  url: 'https://www.comeuntochrist.org/worship-with-us/nearby-churches',
  elements: {
    worship_EmailInput: {
      selector: '//input[@type="email"][0]',
      locateStrategy: 'xpath'
    },
    worship_EmailButton: {
      selector: '//button[@data-type="button"][0]',
      locateStrategy: 'xpath'
    },
    worship_AddressInput: {
      selector: '//input[@data-type="church-unit-search-field"][0]',
      locateStrategy: 'xpath'
    },
    worship_ResultsDropdown: {
      selector: '//select[@class="form-builder_inputField"][0]',
      locateStrategy: 'xpath'
    },
    worship_ResultsGetDirections: {
      selector: '//div[@data-type="church-product-results"][0]',
      locateStrategy: 'xpath'
    }
  }
}