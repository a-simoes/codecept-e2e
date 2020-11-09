const assert = require('assert');
const GeneralConfigurations = require('./../general.conf');

module.exports = {
  url: GeneralConfigurations.siteUrl(),
  host: GeneralConfigurations.webdriver_seleniumHost(),
  browser: GeneralConfigurations.browser(), // 'chrome', 'firefox'
  smartWait: GeneralConfigurations.startWaitMS(),
  waitForTimeout: GeneralConfigurations.waitForTimeoutMS(),
  show: true,
  port: 4444,
  restart: false,
  windowSize: 'maximize',
  keepCookies: false,
  keepBrowserState: false,
  timeouts: {
    script: 20000,
    'page load': 20000,
  },
  coloredLogs: true,
};

if (
  GeneralConfigurations.codeceptHelper() ===
  GeneralConfigurations.codeceptHelperWebDriver()
) {
  if (GeneralConfigurations.browser() === 'chrome') {
  } else if (GeneralConfigurations.browser() === 'firefox') {
  } else {
    assert.fail(
      'Unsupported browser defined! ' + GeneralConfigurations.browser()
    );
  }
}
