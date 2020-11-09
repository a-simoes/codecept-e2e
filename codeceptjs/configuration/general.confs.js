//General constants for codeceptjs
class GeneralConfigurations {
  static name() {
    return 'e2e-tests';
  }

  static outputFolder() {
    return './output';
  }

  static siteUrl() {
    return process.env.SITE_URL || 'https://codecept.io';
  }

  static browser() {
    return process.env.BROWSER || 'chromium';
  }

  static codeceptHelperPlaywright() {
    return 'playwright';
  }

  static codeceptHelperWebDriver() {
    return 'webdriver';
  }

  static webdriver_seleniumHost() {
    return process.env.HOST || 'localhost';
  }

  static codeceptHelper() {
    return (
      process.env.HELPER || GeneralConfigurations.codeceptHelperPlaywright()
    );
  }

  static startWaitMS() {
    return parseInt(process.env.SMART_WAIT_MS || '5000', 10);
  }

  static waitForTimeoutMS() {
    return parseInt(process.env.WAIT_FOR_TIMEOUT_MS || '10000', 10);
  }

  static pauseOnFail() {
    return process.env.PAUSE_ON_FAIL || null;
  }
}

module.exports = GeneralConfigurations;
