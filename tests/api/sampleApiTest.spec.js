const {test, expect} = require('@playwright/test');

let token;
test.beforeAll(async ({request}) => {

    const response = await request.post('http://64.227.160.186:8080/api/auth/login', {
        data: {  //payload
            "username": "Muzaffar",
            "password": "Automation1234"
          },
        headers: { //headers
            'Content-Type': 'application/json'
        }

    })
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.token;
});


test('API Get Request @api', async ({request})=>{
    const response = await request.get('http://64.227.160.186:8080/api/users/profile', {
        headers: {
            'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
        },

    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.id).toBe(377);
    expect(responseBody.username).toBe('Muzaffar');

});

test.skip('API Put Request @api', async ({request})=>{
    console.log('token: '+token);
    const response = await request.put('http://64.227.160.186:8080/api/users/profile', {
        headers: {
            'Accept':'*/*', 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`
        },
        data: {
            "username": "Muzaffar",
            "password": "Automation1234",
            "email": "muzaffar12234@gmail.com",
            "phone": "1234567890"

        },
        
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
}); 