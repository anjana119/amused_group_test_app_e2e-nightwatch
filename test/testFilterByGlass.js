const dataConfig = require('./data.json');
module.exports = {
    '@tags': ['filterGlass'],
    'Test filter by alcoholic flow'(browser) {

        const baseUrl = dataConfig.test_url_path;
        const dataIndexForFilterBar = '#select-element-test-id-glass';
        const dataIndexForFilterBarOptions = '#select-element-test-id-glass option[value="Cocktail glass"]';
        const dataIndexForCard = '.select-element-test-id-item-card-section';
        const dataIndexForFilterResult = '.select-element-test-id-item-card-body-for-glass-type';
        const mainQueryValue = 'Glass: Cocktail glass';

        browser
            .url(baseUrl)
            .waitForElementVisible(dataIndexForFilterBar)
            .click(dataIndexForFilterBar)
            .click(dataIndexForFilterBarOptions)
            .waitForElementVisible(dataIndexForCard, 15000)
            .waitForElementVisible(dataIndexForFilterResult, 15000)
            .assert.textEquals(dataIndexForFilterResult, mainQueryValue);

            browser.saveScreenshot('tests_output/FilterByGlass.png');
    }
}