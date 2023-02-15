///<reference types="cypress"/>
//let pass;
import * as user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

user.firstName = faker.name.firstName();
user.lastName = faker.name.lastName();
user.email = faker.internet.email();
user.address = faker.address.streetAddress();
user.city = faker.address.city();
user.postCode =faker.address.zipCode('####');
user.userName = faker.internet.userName();
user.password = faker.internet.password(15);

describe('Registration and Login', () => {

    it('Registration', () => {

        cy.log('**Open website home page**');
        cy.visit('https://automationteststore.com/');

        cy.log('Open website login page');
        cy.get('#customer_menu_top').click();

        cy.log('Open website sign up form');
        cy.get('.fa.fa-check.fa').scrollIntoView().should('be.visible');
        cy.get('.btn.btn-orange.pull-right').first().click();

        cy.log('**Fill sign up form**');
        cy.get('#AccountFrm_firstname').type(user.firstName);
        cy.get('#AccountFrm_lastname').type(user.lastName);
        cy.get('#AccountFrm_email').type(user.email);
        cy.get('#AccountFrm_address_1').type(user.address); 
        cy.get('#AccountFrm_city').type(user.city);
        cy.get('#AccountFrm_postcode').type(user.postCode);
        cy.get('#AccountFrm_country_id').select('Ukraine');
        cy.get('#AccountFrm_loginname').type(user.userName);  
        cy.get('#AccountFrm_password').type(user.password);
        //cy.get('#AccountFrm_password').invoke('val').then(fieldValue => { //витягуємо значення із поля
        //cy.log('pass: ' + fieldValue)
        //});
        cy.get('#AccountFrm_confirm').type(user.password);   
        cy.get('#AccountFrm_zone_id')
        .select(2, {force: true})
        .invoke('val')
        .should ('not.eq', 'FALSE');  

        cy.log('Check checkboxes');      
        cy.get('#AccountFrm_newsletter0').check();
        cy.get('#AccountFrm_agree').check();

        cy.log('**Submit sign up form**');
        cy.get('button[title="Continue"]').click();
        cy.get('.btn.btn-default.mr10').click();
        

        cy.log('Verify user first name on account page');
        cy.get('h1 span.subtext').should('contain', user.firstName);

        console.log(user)
        
    })

    it('Autorisation', () => {

        cy.log('Open website login page');
        cy.visit('https://automationteststore.com/');

        cy.log('Check user is unauthorized');
        cy.getCookie('customer').should('be.null');

        cy.log('Authorize user');
        cy.get('#customer_menu_top').click();
        cy.get('#loginFrm_loginname').type(user.userName);
        cy.get('#loginFrm_password').type(user.password);

        cy.get('[title="Login"]').click();
        
        cy.get('h1 span.subtext').should('contain', user.firstName)
    })
})



