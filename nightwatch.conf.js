module.exports = {
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
          w3c: false
        }
      }
    }
  }
}