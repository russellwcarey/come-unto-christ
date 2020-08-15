module.exports = {
  'My first test case': browser => {
    browser
      .url('https://www.comeuntochrist.org/')
      .waitForElementVisible('.page-header-nav_open')
      .assert.click(".page-header-nav_open");
  }
}
