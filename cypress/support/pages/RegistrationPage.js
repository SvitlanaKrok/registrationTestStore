import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    visit(){
        cy.log('Open website login page');
        cy.visit('/index.php?rt=account/login');
    }

    openRegistrationForm(){
        return cy.get('.btn.btn-orange.pull-right').first().click();
    }
    getFirstNameField(){
        return cy.get('#AccountFrm_firstname');
    }
    getLastNameField(){
        return cy.get('#AccountFrm_lastname');
    }
    getEmailField(){
        return cy.get('#AccountFrm_email');
    }
    getAddressField(){
        return  cy.get('#AccountFrm_address_1');
    }
    getCityField(){
        return cy.get('#AccountFrm_city');
    }
    getPostCodeField(){
        return cy.get('#AccountFrm_postcode');
    }
    getCountryField(){
        return cy.get('#AccountFrm_country_id');
    }
    getUserNameField(){
        return cy.get('#AccountFrm_loginname');
    }
    getPasswordField(){
        return cy.get('#AccountFrm_password');
    }
    getConfirmPasswordField(){
        return cy.get('#AccountFrm_confirm');
    }
    getZoneIdField(){
        return cy.get('#AccountFrm_zone_id');
    }
    getSubcribeCheckBox(){
        return cy.get('#AccountFrm_newsletter0');
    }
    getAgreeCheckBox(){
        return cy.get('#AccountFrm_agree');
    }
    getSubmitButton(){
        return  cy.get('button[title="Continue"]').contains('Continue');
    }
    verifyUserName(user){
        cy.get('h1 span.subtext').should('contain', user.firstName);
    }

    submitRegistrationForm(user){
        cy.log('Trying to registration');

        this.getFirstNameField().type(user.firstName);
        this.getLastNameField().type(user.lastName);
        this.getEmailField().type(user.email);
        this.getAddressField().type(user.address);
        this.getCityField().type(user.city);
        this.getPostCodeField().type(user.postCode);
        this.getCountryField().select('Ukraine');
        this.getUserNameField().type(user.userName);
        this.getPasswordField().type(user.password);
        this.getConfirmPasswordField().type(user.password);
        this.getZoneIdField().select(2, {force: true}).invoke('val');

        this.getSubcribeCheckBox().check();
        this.getAgreeCheckBox().check();

        this.getSubmitButton().click();
    }
}

export default new RegistrationPage;