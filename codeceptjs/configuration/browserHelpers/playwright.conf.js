const GeneralConfigurations = require('./../general.confs');

module.exports = {
  url: GeneralConfigurations.siteUrl(),
  browser: GeneralConfigurations.browser(), // 'chromium', 'firefox'
  smartWait: GeneralConfigurations.startWaitMS(),
  waitForTimeout: GeneralConfigurations.waitForTimeoutMS(),
  show: true,
};

if (
  GeneralConfigurations.codeceptHelper() ===
  GeneralConfigurations.codeceptHelperPlaywright()
) {
  updateHeadlessMode();
}

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
function updateHeadlessMode() {
  const { setHeadlessWhen } = require('@codeceptjs/configure');
  setHeadlessWhen(process.env.HEADLESS);
}
