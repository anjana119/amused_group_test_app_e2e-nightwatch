const dataConfig = require('./data.json');
module.exports = {
    '@tags': ['filterAlcoholic'],
    'Test filter by alcoholic flow'(browser) {

        const baseUrl = dataConfig.test_url_path;
        const dataIndexForFilterBar = '#select-element-test-id-alcoholic';
        const dataIndexForFilterBarOptions = '#select-element-test-id-alcoholic option[value="Alcoholic"]';
        const dataIndexForCard = '.select-element-test-id-item-card-section';
        const dataIndexForFilterResult = '.select-element-test-id-item-card-heading-badge-2';
        const mainQueryValue = 'Alcoholic';

        browser
            .url(baseUrl)
            .waitForElementVisible(dataIndexForFilterBar)
            .click(dataIndexForFilterBar)
            .click(dataIndexForFilterBarOptions)
            .waitForElementVisible(dataIndexForCard, 15000)
            .waitForElementVisible(dataIndexForFilterResult, 15000)
            .assert.textEquals(dataIndexForFilterResult, mainQueryValue);

            browser.saveScreenshot('tests_output/FilterByAlcoholic.png');
    }
}