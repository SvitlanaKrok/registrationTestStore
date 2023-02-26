///<reference types="cypress"/>
import * as user from '../fixtures/user.json';
import loginPage from '../support/pages/LoginPage';
import accountPage from '../support/pages/AccountPage';

    it('Autorisation with correct login name and password', () => {

        loginPage.visit();
        loginPage.submitLoginForm(user);

        accountPage.verifyUserName(user);
    })
    
    it('Autorisation without login name and password', () => {

        loginPage.visit();
        loginPage.submitWithoutLoginPassword();

        loginPage.verifyErrorAppears();
    })

    it('Autorisation with incorret login name and password', () => {

        loginPage.visit();
        loginPage.submitIncorrectLoginPassword();

        loginPage.verifyErrorAppears();
    })

    it('Autorisation without login name', () => {

        loginPage.visit();
        loginPage.submitWithoutLogin(user);

        loginPage.verifyErrorAppears();
    })

    it('Autorisation without password', () => {

        loginPage.visit();
        loginPage.submitWithoutPassword(user);

        loginPage.verifyErrorAppears();
    })

    it('Autorisation with incorret loginName', () => {

        loginPage.visit();
        loginPage.submitIncorrectLogin(user);

        loginPage.verifyErrorAppears();
    })

    it('Autorisation with incorret password', () => {

        loginPage.visit();
        loginPage.submitIncorrectPassword(user);

        loginPage.verifyErrorAppears();
    })



