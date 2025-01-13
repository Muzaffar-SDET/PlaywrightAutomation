const {test, expect} = require('@playwright/test');
const PageObjectManager = require('../../pages/PageObjectManager');
const {FakeDataUtil} = require('../../utils/FakeDataUtil');


test('Verify Registration - Success @ui', async ({page})=> 
{
    const pageObjectManager = new PageObjectManager(page);
    const fakeFirstName = FakeDataUtil.generateFakeFirstName();
    const fakeLastName = FakeDataUtil.generateFakeLastName();
    const fakeEmail = FakeDataUtil.generateFakeEmail();
    const fakePhoneNumber = FakeDataUtil.generateFakePhoneNumber();
    const fakePassword = FakeDataUtil.generateFakePassword()+'@1';
    const occupation = "Engineer";

    const registrationPage = pageObjectManager.getRegistrationPage();
    await registrationPage.navigateToRegistrationPage();
    await registrationPage.clickRegister();
    await registrationPage.filloutRegistrationForm( fakeFirstName, fakeLastName, fakeEmail, fakePhoneNumber, occupation, fakePassword);
    await registrationPage.clickRegister();
    await page.pause();
    await expect(registrationPage.accountCreatedSuccess).toBeVisible();
});

