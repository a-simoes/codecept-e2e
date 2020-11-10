# E2E tests with codeceptjs

The basis of the project was created using the quickstart from [CodeceptJS](https://codecept.io/quickstart/).

[Codeceptjs architecture](https://codecept.io/basics/#architecture)

To create a CodeceptJS project
`npx create-codeceptjs .`

Add WebdriverIO run
`npx create-codeceptjs --webdriverio`

Initialize CodeceptJS for your project:
`npx codeceptjs init` - initialize codeceptjs for current project (required)

# Scripts

## Note

`npm i` - is required when running locally. (will install node modules)

## Allure plugin

`npm install -g allure-commandline --save-dev` - to use allure, you must install the plugin

`npm reporter:allure` - to open the reporting tool

## List of commands existing in package.json file:

`npm run tests` - runs tests with Playwright and chromium

`npm tests:pauseOnFail` - runs tests with Playwright and chromium and pauses when a test fails

`npm run tests:current` - runs tests tagger with current with Playwright and chromium

`npm run tests:chromium` - runs tests with Playwright and chromium

`npm run tests:chromium:headless` - runs tests with Playwright and chromium headless

`npm run tests:firefox` - runs tests with Playwright and firefox

`npm run tests:firefox:headless` - runs tests with Playwright and firefox headless

`npm run tests:webdriver:chrome` - runs tests with Webdriver and chrome

`npm run tests:webdriver:firefox` - runs tests with Webdriver and firefox

## Run tests on Docker

The configuration is available in folder e2e
`cd docker/e2e`

First start containers with
`docker-compose up` - will start all containers and also codeceptjs (will fail to run tests)

Then run the tests in a new terminal with:

`docker-compose run --rm codeceptjs` - run tests in docker with Webdriver and browser chrome

`docker-compose run --rm -e BROWSER=firefox codeceptjs` - run tests in docker Webdriver and browser firefox
