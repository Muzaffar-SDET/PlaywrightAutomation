const {test, expect} = require('@playwright/test');
const PageObjectManager = require('../../pages/PageObjectManager');
const config = require('../../config.json');  // Import config file

test('Verify Product added to cart', async ({page})=> 
{
    const pageObjectManager = new PageObjectManager(page);
    const loginPage = pageObjectManager.getLoginPage();
    const product = 'ADIDAS ORIGINAL';

    await loginPage.launchURL();
    await loginPage.login(config.username, config.password);
    await pageObjectManager.getDashboardPage().addProductToCart(product);
    await expect(pageObjectManager.getDashboardPage().productAddedAlert).toBeVisible();
    const cartPage = await pageObjectManager.getDashboardPage().goToCart();
    expect(cartPage.verifyCartPage).toBeTruthy();
});