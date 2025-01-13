const { test, expect, request } = require('@playwright/test');
const AuthenticationService = require('../../api-test-services/AuthenticationService');
const FakeDataUtil = require('../../utils/FakeDataUtil');

test('Register API Test @api', async ({ request }) => {
    const authenticationService = new AuthenticationService(request);  // Pass request to AuthenticationService
    const firstName = FakeDataUtil.generateFakeFirstName();
    const lastName = FakeDataUtil.generateFakeLastName();
    const email = firstName + '.' + lastName + '@hotmail.com';
    const phoneNumber = FakeDataUtil.generateFakePhoneNumber();
    const password = FakeDataUtil.generateFakePassword()+'.1aA';
    
    
    const data = {"firstName":firstName,"lastName":firstName,"userEmail":email,
        "userRole":"customer","occupation":"Doctor","gender":"Male",
        "userMobile":phoneNumber,"userPassword":password,
        "confirmPassword":password,"required":true};

    // Call the register method (uses the baseURL + '/register' internally)
    const response = await authenticationService.register(data);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.message).toBe('Registered Successfully');
});
