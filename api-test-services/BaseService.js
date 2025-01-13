const { request } = require('@playwright/test');

class BaseService {
    constructor(request) {
        this.request = request;  // Playwright's request object
        this.baseURL = 'https://rahulshettyacademy.com/api/ecom/auth/';  // baseURL is defined here
        this.token = '';  // Default token is empty
    }

    // Getter for baseURL
    getBaseURL() {
        return this.baseURL;
    }

    // Setter for baseURL (if needed)
    setBaseURL(baseURL) {
        this.baseURL = baseURL;
    }

    // Set authorization token
    setAuthToken(token) {
        this.token = token;
    }

    // Generic GET request method (with or without token)
    async get(endpoint) {
        const headers = {
            'Content-Type': 'application/json',
        };

        // Include Authorization header if token is set
        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        const response = await this.request.get(`${this.baseURL}${endpoint}`, {
            headers: headers,
        });

        return response;
    }

    // Generic POST request method with payload
    async post(endpoint, payload) {
        const response = await this.request.post(`${this.baseURL}${endpoint}`, {
            data: payload,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    }

    // Generic PUT request method with payload
    async put(endpoint, payload) {
        const response = await this.request.put(`${this.baseURL}${endpoint}`, {
            data: payload,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    }
}

module.exports = BaseService;
