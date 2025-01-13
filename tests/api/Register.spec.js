const { test, expect, request } = require('@playwright/test');
const AuthenticationService = require('../../api-test-services/AuthenticationService');

test.only('Register API Test @api', async ({ request }) => {
    const authenticationService = new AuthenticationService(request);  // Pass request to AuthenticationService
    const data = {"firstName":"Playwright","lastName":"Test","userEmail":"Playwright8686@hotmail.com",
        "userRole":"customer","occupation":"Doctor","gender":"Male",
        "userMobile":"6953210956","userPassword":"kGaVve.iBbx4HmF",
        "confirmPassword":"kGaVve.iBbx4HmF","required":true};

    // Call the register method (uses the baseURL + '/register' internally)
    const response = await authenticationService.register(data);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.message).toBe('Registered Successfully');
});
