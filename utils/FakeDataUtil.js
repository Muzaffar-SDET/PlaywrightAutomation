import { faker } from '@faker-js/faker';
class FakeDataUtil {
    static generateFakeFirstName() {
        return faker.person.firstName();
    }
    static generateFakeLastName() {
        return faker.person.lastName();
    }
    static generateFakeEmail() {
        return faker.internet.email();
    }
    static generateFakePhoneNumber() {
        return faker.phone.number('human').replace(/\D/g, '').substring(0, 10);
    }
    static generateFakePassword() {
        return faker.internet.password();
    }
}

module.exports = { FakeDataUtil };