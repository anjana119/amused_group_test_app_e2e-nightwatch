const dataConfig = require('./data.json');
module.exports = {
    '@tags': ['search'],
    'Test search function with flow'(browser) {

        const baseUrl = dataConfig.test_url_path;
        const dataIndexForSearchBar = '#select-element-test-id-search-bar';
        const dataIndexForSearchBtn = '.select-element-test-id-search-btn';
        const mainQueryValue = '501 Blue';
        const dataIndexForSearchResult = '.select-element-test-id-item-card-section';
        const dataIndexFprSearchResultCardHeading = '#select-element-test-id-item-card-heading';

        browser
            .url(baseUrl)
            .waitForElementVisible(dataIndexForSearchBar)
            .setValue(dataIndexForSearchBar, mainQueryValue)
            .waitForElementVisible(dataIndexForSearchBtn, 5000)
            .click(dataIndexForSearchBtn)
            .waitForElementVisible(dataIndexForSearchResult, 15000)
            .assert.textEquals(dataIndexFprSearchResultCardHeading, mainQueryValue);

            browser.saveScreenshot('tests_output/search.png');
    }
}