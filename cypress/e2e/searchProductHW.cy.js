///<reference types="cypress"/>

import * as user from '../fixtures/user.json';
import {headlessLogin, searchProduct} from '../support/helper';

it('**Open account page**', () => {

    headlessLogin(user);

    cy.visit('/index.php?rt=account/account')
    cy.get('input#filter_keyword').type('E');
    cy.get('.fa.fa-search').first().click();
    
    searchProduct('Body Cream by Bulgari');

    cy.log('**Order products**');
    cy.get('.productpagecart').children('li').eq(0).click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();

    cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
})



 
