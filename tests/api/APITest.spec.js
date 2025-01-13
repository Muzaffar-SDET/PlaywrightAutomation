const { test, expect } = require("allure-playwright");

test.skip('API Put Request @api', async ({request})=>{
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzgzM2RkN2UyYjU0NDNiMWYxZjQ0NjkiLCJ1c2VyRW1haWwiOiJBc3N1bnRhMjU0NUBob3RtYWlsLmNvbSIsInVzZXJNb2JpbGUiOjY5NTMyMTk4NTYsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MzY2NTQ1MzQsImV4cCI6MTc2ODIxMjEzNH0.DzwHpilsOxOBCmTvI1erTCcPQMnOMXEViPstjk_AMqs';
    // console.log('token: '+token);
    const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
        headers: {
            'Accept':'*/*', 'Content-Type': 'application/json'
        },
        data: {
            "userEmail":"Assunta2545@hotmail.com","userPassword":"kGaVve.iBbx4HmF"

        },
        
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.message).toBe('Login Successfully');
    console.log(responseBody);
}); 