const LoginPage = require('./LoginPage');
const DashboardPage = require('./DashboardPage');
const RegistrationPage = require('./RegistrationPage');
const CartPage = require('./CartPage');

class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.registrationPage = new RegistrationPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getRegistrationPage() {
    return this.registrationPage;
  }

  getCartPage() {
    return new CartPage(this.page);
  }

}

module.exports = PageObjectManager;

