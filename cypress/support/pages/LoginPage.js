import BasePage from "./BasePage";

class LoginPage extends BasePage{
    visit(){
        cy.log('Open website login page');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname'); // повинно бути return
    }

    getPasswordField(){
        return cy.get('#loginFrm_password');
    }

    getSubmitButton(){
        return cy.get('button[type="submit"]').contains('Login');
    }

    assertUserUnauthorized(){
        cy.log('Verify user is unauthorized');
        cy.getCookie('customer').should('be.null');
        cy.log('User is unauthorized ✅');
    }

    verifyErrorAppears(){
        cy.get('.alert.alert-error')
        .should('have.text', '\n×\nError: Incorrect login or password provided.')
        .and('have.css', 'background-color')
        .and('eq', 'rgb(242, 222, 222)');
    }

    submitLoginForm(user){
        cy.log('Trying to login with login and password');

        this.getLoginField().type(user.userName);
        this.getPasswordField().type(user.password);
        this.getSubmitButton().click();

    }

    submitWithoutLoginPassword(){
        cy.log('Trying login without login name and password'); 

        this.getSubmitButton().click();

    }

    submitIncorrectLoginPassword(){
        cy.log('Trying to login with incorret login name and password');

        this.getLoginField().type('hdbfhd');
        this.getPasswordField().type('jshfj');
        this.getSubmitButton().click();

    }

    submitWithoutLogin(user){
        cy.log('Trying to login without login name');

        this.getPasswordField().type(user.password);
        this.getSubmitButton().click();

    }

    submitWithoutPassword(user){
        cy.log('Trying to login without password');

        this.getLoginField().type(user.userName);
        this.getSubmitButton().click();

    }

    submitIncorrectLogin(user){
        cy.log('Trying to login with incorret login');

        this.getLoginField().type('hdbfhd');
        this.getPasswordField().type(user.password);
        this.getSubmitButton().click();

    }

    submitIncorrectPassword(user){
        cy.log('Trying to login with incorret password');

        this.getLoginField().type(user.userName);
        this.getPasswordField().type('jshfj');
        this.getSubmitButton().click();

    }
    
}

export default new LoginPage;