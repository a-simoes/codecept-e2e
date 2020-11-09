const GeneralConfigurations = require('./configuration/general.confs');

let webDriverConfig = require('./configuration/browserHelpers/webdriver.conf'); // reading selenium config from separate file
let playwrightConfig = require('./configuration/browserHelpers/playwright.conf'); // reading playwright config from separate file

exports.config = {
  name: GeneralConfigurations.name(),
  tests: './tests/**/*.js',
  output: GeneralConfigurations.outputFolder(),
  include: {
    I: './steps_file.js',
  },

  mocha: {},

  plugins: {
    pauseOnFail: {
      enabled: GeneralConfigurations.pauseOnFail(),
    },
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
      enableScreenshotDiffPlugin: true,
      outputDir: GeneralConfigurations.outputFolder() + '/allure',
    },
  },

  bootstrap: () => {
    console.log('bootstrap is called.');

    cleanOutputFolder();
  },
  teardown: () => {
    console.log('teardown is called.');
  },
};

//Update helper configs
if (
  GeneralConfigurations.codeceptHelper() ===
  GeneralConfigurations.codeceptHelperPlaywright()
) {
  console.log('using playwright');

  exports.config.helpers = {
    Playwright: playwrightConfig,
  };
} else if (
  GeneralConfigurations.codeceptHelper() ===
  GeneralConfigurations.codeceptHelperWebDriver()
) {
  console.log('using webdriver');

  exports.config.helpers = {
    WebDriver: webDriverConfig,
  };
} else {
  const assert = require('assert');
  assert.fail(
    GeneralConfigurations.codeceptHelper() + ' is not a valid helper!!!'
  );
}

function cleanOutputFolder() {
  const fs = require('fs');
  const outputFolder = exports.config.output;

  console.log('cleanOutputFolder: will clean folder ' + outputFolder);

  fs.rmdirSync(outputFolder, { recursive: true });
  fs.mkdirSync(outputFolder);
}
