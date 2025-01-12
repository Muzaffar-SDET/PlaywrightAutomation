const config = require('../config.json');  // Import the config file
class RegistrationPage
{
    constructor(page)
    {
        this.page = page;
        this.registerBtn = page.locator('.btn1');
        this.registerformRegisterBtn = page.locator('#login');
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail');
        this.phoneNumber = page.locator('#userMobile');
        this.occupation = page.locator("select[formcontrolname='occupation']");
        this.genderMale = page.locator("input[value='Male']");
        this.genderFemale = page.locator("input[value='Female']");
        this.password = page.locator('#userPassword');
        this.confirmPassword = page.locator('#confirmPassword');
        this.iam18orOlder = page.locator("[formcontrolname='required']");
        this.accountCreatedSuccess = page.getByRole('heading', { name: 'Account Created Successfully' });
    }

    async navigateToRegistrationPage()
    {
        await this.page.goto(config.baseURL);
        await this.registerBtn.click();
    }

    async filloutRegistrationForm(firstName, lastName, email, phoneNumber, occupation, password)
    {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.phoneNumber.fill(phoneNumber);
        await this.page.selectOption("[formcontrolname='occupation']", {label: occupation});
        await this.genderMale.check();
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.iam18orOlder.check();
    }

    async clickRegister()
    {
        await this.registerformRegisterBtn.click();
    }

    async verifyRegistrationSuccess()
    {
        return this.accountCreatedSuccess;
    }   

}

module.exports = RegistrationPage;