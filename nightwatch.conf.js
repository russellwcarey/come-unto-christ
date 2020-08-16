module.exports = {
  "src_folders": ["tests"],
  "page_objects_path": "pages",
  "globals_path": "./globals.js",

  "selenium": {
    "start_process": false
  },

  "webdriver": {
    "start_process": true,
    "server_path": "node_modules/.bin/chromedriver",
    "port": 9515
  },

  "test_settings": {
    "default": {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }

  /*
  "test_settings": {
    "default": {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    }
  }
  */
};

/*
const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");


// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
    "src_folders": [
        "tests",
    ],
    "page_objects_path": './pages',
    "globals_path": "./globals.js",
    "output_folder": "./reports", // reports (test outcome) output by nightwatch
    "custom_commands_path" : "./commands",
    "selenium": {
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": seleniumServer.path,
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": {
            "webdriver.chrome.driver" : chromedriver.path
        }
    },
    "test_settings": {
        "default": {
            "silent": true,
            "launchUrl": 'http://local.mytestwebsite.com',
            "screenshots": {
                "enabled": true, // if you want to keep screenshots
                "path": "./screenshots/" // save screenshots here
            },
            "globals": {
                "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome",
                "chromeOptions": {
                    "args": [
                        "window-size=1366,768",
                        "--incognito"
                    ]
                }
            }
        }
    }
}
*/
