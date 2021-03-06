module.exports = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "globals.js",

  "selenium" : {
    "start_process" : false
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost:3000/",
      "selenium_port"  : 9515,
      "selenium_host"  : "localhost",
      "default_path_prefix" : "",

      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions" : {
          "args" : [
            "headless",
            "--no-sandbox"
          ]
        },
        "acceptSslCerts": true
      }
    }
  }
}