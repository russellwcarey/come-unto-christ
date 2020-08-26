const config = {
  src_folders: ["./tests"],
  page_objects_path: "./pages",
  output_folder: "./tests_output",

  webdriver: {
    start_process: true,
    server_path: require("chromedriver").path,
    port: 9515,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: false,
        },
      },
      silent: true,
      screenshots: {
        enabled: false,
        path: "./tests_output/screenshots",
      },
      globals: {
        waitForConditionTimeout: 5000,
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["window-size=1366,768", "--incognito"],
        },
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: "firefox"
      }
    },
    edge: {
      desiredCapabilities: {
        browserName: "MicrosoftEdge",
      },
    },
  },
};

module.exports = config;
