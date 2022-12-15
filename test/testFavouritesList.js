const dataConfig = require('./data.json');
module.exports = {
    '@tags': ['favourites'],
    'Test favourites list flow'(browser) {

        const baseUrl = dataConfig.test_url_path;
        const dataIndexForFavourite = '#select-element-test-id-favourites';
        const dataIndexForItemList = '.select-element-test-id-item-card-section';
        const dataIndexForAddFavListBtn = '#select-element-test-id-item-add-to-fav-btn';
        const dataIndexForFavTitle = '.select-element-test-id-favourit-list';

        browser
            .url(baseUrl)
            .waitForElementVisible(dataIndexForItemList, 5000)
            .click(dataIndexForAddFavListBtn)
            .waitForElementVisible(dataIndexForFavourite)
            .click(dataIndexForFavourite)
            .waitForElementVisible(dataIndexForFavTitle, 15000);

            browser.saveScreenshot('tests_output/favourit.png');
    }
}