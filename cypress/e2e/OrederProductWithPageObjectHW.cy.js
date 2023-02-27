///<reference types="cypress"/>
import * as user from '../fixtures/user.json';
import loginPage from '../support/pages/LoginPage';
import accountPage from '../support/pages/AccountPage';
import orderPage from '../support/pages/OrderPage'

    it('Order from main page', () => {

        loginPage.visit();
        loginPage.submitLoginForm(user);

        accountPage.verifyUserName(user);

        orderPage.addProductToCart();

        orderPage.makeOrder();

        orderPage.verifyErrorAppears();

        
    })




