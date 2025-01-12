const DashboardPage = require('./DashboardPage');
const config = require('../config.json');  // Import config file
class LoginPage{    
    constructor(page){
        this.page = page;
        this.registerBtn = page.locator('a.btn1');
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.logInBtn = page.locator('#login');
    }

    async launchURL(){
        await this.page.goto(config.baseURL);
    }

    async clickRegister(){
        await this.registerBtn.click();
    }

    async getTitle(){
        return await this.page.title();
    }

    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.logInBtn.click();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyLoginSuccess(){
        return await new DashboardPage(this.page);
    }

}

module.exports = LoginPage;
