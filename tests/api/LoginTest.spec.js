const { test, expect, request } = require('@playwright/test');
const AuthenticationService = require('../../api-test-services/AuthenticationService');

test.skip('Login API Test @api', async ({ request }) => {
    const authenticationService = new AuthenticationService(request);  // Pass request to AuthenticationService
    const data = {
        "userEmail": "Assunta2545@hotmail.com",
        "userPassword": "kGaVve.iBbx4HmF"
    };

    // Call the login method (uses the baseURL + '/login' internally)
    const response = await authenticationService.login(data);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.message).toBe('Login Successfully');
});
