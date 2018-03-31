module.exports = {
  'Demo test': (browser) => {
    console.log(browser.launchUrl)
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.App-logo', 5000)
      .end();
  }
}