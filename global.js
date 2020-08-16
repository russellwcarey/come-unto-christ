// var driver = require('chromedriver');

// module.exports = {
//   before(browser, done) {
//     // > this will get run only ONCE, before all the tests <

//     driver.start();
//     done();

//     browser.url('https://www.comeuntochrist.org/');
//     //browser.resizeWindow(1280, 800);
//     browser.maximizeWindow();
//     browser.deleteCookies();
//     browser.expect.element('body').to.be.present;

//     done();
//   },
//   beforeEach(browser, done) {
//     // > this will get run before every test case <
//     console.log('Momma Likes me');
//     done();
//   },

//   afterEach(browser, done) {
//     // > this will get run after every test case <
//     console.log('Dadda Likes me');
//     done();
//   },
//   after(browser, done) {
//     // > this will get run ONCE, after all tests have run <
//     browser.end();

//     driver.stop();
//     done();
//   }
// };