module.exports = {
  url: 'https://www.comeuntochrist.org/contact-us',
  elements: {
    contactuspage_locationInput: {
      selector: 'input.form-builder_inputField.location-field_input.typography_formInput.form-builder_invalid',
      locateStrategy: 'css selector'
    },
    contactuspage_searchButton: {
      selector:
        '//button[@class="button_button"]',
      locateStrategy: 'xpath'
    },
    //verify address switches to this URL
    //https://www.comeuntochrist.org/worship-with-us/nearby-churches?location=1161%20SW%206th%20Ave%2C%20Ontario%2C%20OR%2097914
  }
}