const {test, expect, request} = require('@playwright/test');
const PageObjectManager = require('../../pages/PageObjectManager');
const config = require('../../config.json');  // Import the config file


test('Verify Login - Success', async ({page})=> 
{
    test.info().annotations.push({
        type: 'WebTest',
        description: 'This test verifies the login functionality of the application',
      });
    
    const pageObjectManager = new PageObjectManager(page);
    const username = config.username;
    const password = config.password;

    await pageObjectManager.getLoginPage().launchURL();
    await pageObjectManager.getLoginPage().login(username, password);
    const dashboardPage = await pageObjectManager.getLoginPage().verifyLoginSuccess();
    expect(await dashboardPage.getDashboardTitle()).toBe("Let's Shop");
    await expect(dashboardPage.logoutBtn).toBeVisible();
    await expect(dashboardPage.logo).toBeVisible();
});

