///<reference types="cypress"/>
import * as user from '../fixtures/user.json';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import { faker } from '@faker-js/faker';

user.firstName = faker.name.firstName();
user.lastName = faker.name.lastName();
user.email = faker.internet.email();
user.address = faker.address.streetAddress();
user.city = faker.address.city();
user.postCode =faker.address.zipCode('####');
user.userName = faker.internet.userName();
user.password = faker.internet.password(15);


    it('Registration', () => {

        loginPage.visit();

        registrationPage.openRegistrationForm();
        registrationPage.submitRegistrationForm(user);
        
    })




