

// FUNCTION EXAMPLES FROM WEATHERAPP TESTING PROJECT

// module.exports = {
//   url: "https://devmountain-qa.github.io/weatherman/build/index.html",
//   commands: [{
//     searchWeather: function (search, result) {
//       this
//         .setValue('@input', search)
//         .click('@submit')
//         .expect.element('@currentLocation').text.to.contain(result).before(5000)
//       return this
//     },
//     searchAgain: function () {
//       this
//         .click('@searchAgain')
//         .waitForElementVisible('@input')
//       return this
//     },
//     checkError: function (search) {
//       this
//         .setValue('@input', search)
//         .click('@submit')
//         .expect.element('@errorMessage').text.to.contain('There was a problem fetching the weather!').before(5000)
//       return this
//     },
//     tryAgain: function () {
//       this
//         .click('@tryAgain')
//         .waitForElementVisible('@input')
//       return this
//     }
//   }],
//   elements: {
//     input: '.enter-location__input',
//     submit: '.enter-location__submit',
//     currentLocation: '.current-weather__location',
//     searchAgain: '.current-weather__search-again',
//     errorMessage: '.error-message__message',
//     tryAgain: '.error-message__try-again'

//   }
// }




// PAGE OBJECT - EXAMPLES FROM VRBO GROUP PROJECT

// var vrboAsset = require('../vrboAsset/vrboAsset')

// var vrboNav = {

//   replay: function (browser, foreach) {
//     this
//       .firstInfoEnter()
//     searchArray.forEach(search => {
//       this.secondInfoEnter(browser, search)

//     })
//   },
//   // login: function(browser, login){
//   //     this
//   //     // .click('@loginDropdown')
//   //     // .setValue('@searchLocation', 'new york')
//   //     .pause(1100)
//   //     .click('@login')
//   //     .pause(2000)
//   //     .setValue('@email', 'cameronwalk9@gmail.com')
//   //     .click('@getStartedBtn')
//   //     .setValue('@password', 'stinger0')
//   //     return this
//   // },
//   // cleanUp: function(browser, cleanUp){
//   //     this
//   //     .click('//*/div[@class="site-header-nav__scratchpad"]')
//   //     .click('@deleteBoard')
//   //     .click('@confirmDelete')
//   //     return this
//   // },


//   firstInfoEnter: function (browser, area) {
//     this
//       .useXpath()
//       .pause(1000)
//     this.setValue('@searchLocation', 'Georgia')
//       .pause(1000)
//       .click('@searchBtn')
//       .click('@saveBtn1')
//       .setValue('@nameBoardInput', "For Fun")
//       .click('@saveProp')
//       .click('@done')
//       .pause(1000)
//       .click('//*/div[@class="site-header-nav__scratchpad"]')
//       .click('@locationClick')
//       .pause(1000)
//       .verify.elementPresent('//*/span[contains(text(),"Georgia")]')
//       .click('@homeButton')
//       .click('//*/div[@class="site-header-nav__scratchpad"]')
//       .click('@locationClick')
//       .verify.elementPresent('//*/span[contains(text(),"Georgia")]')
//       .click('@homeButton')
//     // searchArray.forEach(search=>{
//     //     this.infoEnter(browser, search)
//     // })
//     return this
//   },
//   secondInfoEnter: function (browser, area) {
//     this
//       .useXpath()
//       .pause(1000)
//       .clearValue('@searchLocation')
//       .pause(1000)
//     this.setValue('@searchLocation', area.sel)
//       .pause(1000)
//       .click('@searchBtn')
//       .click('@saveBtn1')
//       // .setValue('@nameBoardInput', "For Fun")
//       .pause(1000)
//       .click('@saveMore')
//       .click('@done')
//       .pause(1000)
//       .click('//*/div[@class="site-header-nav__scratchpad"]')
//       .click('@locationClick')
//       .pause(1000)
//       .verify.elementPresent(`//*/span[contains(text(),"${area.result}")]`)
//       .click('@homeButton')
//       .click('//*/div[@class="site-header-nav__scratchpad"]')
//       .click('@locationClick')
//       .verify.elementPresent(`//*/span[contains(text(),"${area.result}")]`)
//       .click('@homeButton')
//     // searchArray.forEach(search=>{
//     //     this.infoEnter(browser, search)
//     // })
//     return this

//   },
// }
// module.exports = {
//   url: "https://www.vrbo.com/",
//   commands: [vrboNav],
//   elements: {
//     searchLocation: {
//       selector: '//*/input[@id="react-destination-typeahead"]',
//       locateStrategy: 'xpath'
//     },
//     searchBtn: {
//       selector: '//*/button[@type="submit"]',
//       locateStrategy: 'xpath'
//     },
//     saveBtn1: {
//       selector: '(//*/button[@tabindex="-1"][1])',
//       locateStrategy: 'xpath'
//     },
//     nameBoardInput: {
//       selector: '//*/input[@name="createBoardName"]',
//       locateStrategy: 'xpath'
//     },
//     saveProp: {
//       selector: '//*/button[@class="btn btn-primary btn-sm"]',
//       locateStrategy: 'xpath'
//     },
//     done: {
//       selector: '//*/button[@class="btn btn-default btn-sm"]',
//       locateStrategy: 'xpath'
//     },
//     tripBoard: {
//       selector: '//*/div[@class="site-header-nav__scratchpad"]',
//       locateStategy: 'xpath'
//     },
//     locationClick: {
//       selector: '//*/div[@class="three-pack__image three-pack__image--rounded-top-and-bottom-left three-pack__image--left-panel"]',
//       locateStrategy: 'xpath'
//     },
//     homeButton: {
//       selector: '//*/img[@alt="Vrbo logo"]',
//       locateStrategy: 'xpath'
//     },
//     saveMore: {
//       selector: '//*/button[@class="btn btn-default SaveButton btn-sm"]',
//       locateStrategy: 'xpath'
//     },
//     login: {
//       selector: '(//*/li[@class="site-header-login__item"][0])',
//       locateStrategy: 'xpath'
//     },
//     email: {
//       selector: '//*/input[@type="email"]',
//       locateStrategy: 'xpath'
//     },
//     getStartedBtn: {
//       selector: '//*/button[@type="submit"]',
//       locateStrategy: 'xpath'
//     },
//     password: {
//       selector: '//*/input[@type="password"]',
//       locateStrategy: 'xpath'
//     },
//     confirmDelete: {
//       selector: '//*/button[@data-wdio="tripboard-summary__hit-delete--confirm"]',
//       locateStrategy: 'xpath'
//     },
//     deleteBoard: {
//       selector: '//*/button[@class="btn btn-link tripboard-summary-hit__menu-remove btn-xs"]',
//       locateStrategy: 'xpath'
//     },
//     loginDropdown: {
//       selector: '//*/button[@id="site-header__login"]'
//     },
//     spotOne: 'div[data-suggestion-key="0"]',

//   }
// }




//ARRAY EXAMPLE FROM ANOTHER VRBO GROUP PROJECT JS FILE

// var obj = {}
// var vrboObject = require('../pageObjects/vrboPage')

// module.exports = [
//   searchArray = [
//     { sel: 'Texas', result: 'Texas' },
//     { sel: 'Hawaii', result: 'Hawaii' },
//     { sel: 'Las Vegas', result: 'Las Vegas' },
//     { sel: 'British Colombia', result: 'British Columbia' },
//     { sel: 'Jokkmokk, Norrbotten County, Sweden', result: 'Sweden' },
//     { sel: 'Helsinki', result: 'Helsinki' },
//     { sel: 'Corinth, Peloponnese, Greece', result: 'Corinth' },
//     { sel: 'Brisbane City', result: 'Brisbane' },
//     { sel: 'Seoul, South Korea', result: 'Seoul' },
//   ]
// ]




// TESTS FROM VRBO GROUP PROJECT

// var obj = {}

// var vrboObject = require('../pageObjects/vrboPage')
// // var vroboAsset=require('..')


// var search = (browser, destination) => {
//   browser
//     .click('@search')
//     .setValue('@search', destination.search)
//     .pause(1000)
//     .click('@spotOne')
//     .useXpath()
//     .click('(//*[text()="5"])[2]')
//     .click('(//*[text()="12"])[2]')
//     .pause(500)
//     .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[2]')
//     .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[2]')
//     .click('(//span[@class="SVGIcon SVGIcon--16px flex-center"])[4]')
//     .useCss()
//     .click('button[type="submit"]')
//     .useXpath()
//     .pause(500)
//     .verify.containsText('@search', destination.results)

// }

// var citySearch = [
//   { search: 'Waimea', results: 'Waimea' },
//   { search: 'Oregon Coast', results: 'Oregon Coast' },
//   { search: 'Coronado National Forest', results: 'Coronado National Forest' }
// ]

// var vp = {}
// module.exports = {
//   beforeEach: browser => {
//     vp = browser.page.vrboPage()
//     vp
//       .navigate()
//   },
//   after: browser => {
//     vp.end()
//   },
//   'Search': browser => {
//     citySearch.forEach(test => {
//       search(vp, test)
//     })


//   },


//   "save function logged out": browser => {
//     obj
//       .replay()
//   },
//   // "save function logged in":browser=>{
//   //     obj
//   //     .login()
//   //     .replay()
//   //     .cleanUp()
//   // }

// }