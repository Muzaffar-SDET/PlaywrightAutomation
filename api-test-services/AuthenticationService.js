const BaseService = require('./BaseService');

class AuthenticationService extends BaseService {
    constructor(request) {
        super(request);  // Pass request to the parent class (BaseService)
    }

    async register(data) {
        return await this.post('register', data);  // Pass only the endpoint and data
    }

    async login(data) {
        return await this.post('login', data);  // Pass only the endpoint and data
    }
}

module.exports = AuthenticationService;
