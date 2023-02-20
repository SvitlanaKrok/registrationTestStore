///<reference types="cypress"/>

import * as user from '../fixtures/user.json';

describe('Autorisation User', () => {

    it('Autorisation with correct login name and password', () => {

        cy.log('**Open website login page**');
        cy.visit('/');

        cy.log('Check user is unauthorized');
        cy.getCookie('customer').should('be.null');

        cy.log('**Authorize user**');
        cy.get('#customer_menu_top').click();
        cy.get('#loginFrm_loginname').type(user.userName);
        cy.get('#loginFrm_password').type(user.password);

        cy.get('[title="Login"]').click();
        cy.get('h1 span.subtext').should('contain', user.firstName)
    })

    it('Autorisation without login name and password', () => {

        cy.log('**Open website login page**');
        cy.visit('/index.php?rt=account/login');

        cy.log('**Error message appears if field login name and pasword are empty**');
        cy.get('[title="Login"]').click();
        cy.get('.alert.alert-error')
        .should('have.text', '\n×\nError: Incorrect login or password provided.')
        .and('have.css', 'background-color')
        .and('eq', 'rgb(242, 222, 222)');
       
    })

    it('Autorisation with incorret login name and password', () => {

        cy.log('**Open website login page**');
        cy.visit('/index.php?rt=account/login');

        cy.log('**Error message appears if field login name and pasword have incorrect data**');
        cy.get('#loginFrm_loginname').type(user.userNameInCorect);
        cy.get('#loginFrm_password').type(user.passwordIncorrect);
        cy.get('[title="Login"]').click();
        cy.get('.alert.alert-error')
        .should('have.text', '\n×\nError: Incorrect login or password provided.')
        .and('have.css', 'background-color')
        .and('eq', 'rgb(242, 222, 222)');
       
    })

    it('Autorisation without login name', () => {

        cy.log('**Open website login page**');
        cy.visit('/index.php?rt=account/login');

        cy.log('**Error message appears if field login name is empty**');
        cy.get('#loginFrm_loginname').type(user.userName);
        cy.get('[title="Login"]').click();
        cy.get('.alert.alert-error')
        .should('have.text', '\n×\nError: Incorrect login or password provided.')
        .and('have.css', 'background-color')
        .and('eq', 'rgb(242, 222, 222)');
    })

    it('Autorisation without password', () => {

        cy.log('**Open website login page**');
        cy.visit('/index.php?rt=account/login');

        cy.log('**Error message appears if field password is empty**');
        cy.get('#loginFrm_password').type(user.password);
        cy.get('[title="Login"]').click();
        cy.get('.alert.alert-error')
        .should('have.text', '\n×\nError: Incorrect login or password provided.')
        .and('have.css', 'background-color')
        .and('eq', 'rgb(242, 222, 222)');
    })

    it('Autorisation with incorret loginName', () => {

        cy.log('**Open website login page**');
        cy.visit('/index.php?rt=account/login');

        cy.log('**Error message appears if field login name has incorrect data**');
        cy.get('#loginFrm_loginname').type(user.userNameInCorect);
        cy.get('[title="Login"]').click();
        cy.get('.alert.alert-error')
        .should('have.text', '\n×\nError: Incorrect login or password provided.')
        .and('have.css', 'background-color')
        .and('eq', 'rgb(242, 222, 222)');
       
    })

    it('Autorisation with incorret password', () => {

        cy.log('**Open website login page**');
        cy.visit('/index.php?rt=account/login');

        cy.log('**Error message appears if pasword has incorrect data**');
        cy.get('#loginFrm_password').type(user.passwordIncorrect);
        cy.get('[title="Login"]').click();
        cy.get('.alert.alert-error')
        .should('have.text', '\n×\nError: Incorrect login or password provided.')
        .and('have.css', 'background-color')
        .and('eq', 'rgb(242, 222, 222)');
       
    })
})



