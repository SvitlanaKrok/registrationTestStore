///<reference types="cypress"/>

import * as user from '../fixtures/user.json';

describe('Order product', () => {

    it('Order', () => {

        cy.log('**Open website login page**');
        cy.visit('https://automationteststore.com/');

        cy.log('Check user is unauthorized');
        cy.getCookie('customer').should('be.null');

        cy.log('**Authorize user**');
        cy.get('#customer_menu_top').click();
        cy.get('#loginFrm_loginname').type(user.userName);
        cy.get('#loginFrm_password').type(user.password);
        cy.get('[title="Login"]').click();
        cy.get('h1 span.subtext').should('contain', user.firstName);
        
        cy.log('**Choose product**');
        cy.get('.nav-pills.categorymenu').children('li').eq(2).click();
        cy.get('.thumbnails.row').children('li').eq(0).click();
        cy.get('.col-md-3.col-sm-6.col-xs-12').children('.thumbnail').eq(0).click();
        cy.get('.productpagecart').children('li').eq(0).click();
        cy.get('#cart_quantity50').clear().type('2');
        cy.get('a.btn.btn-default.mr10.mb10').click();
        cy.get('.nav-pills.categorymenu').children('li').eq(4).click();
        cy.get('.thumbnails.row').children('li').last().click();
        cy.get('#sort').select('Price Low > High');
        cy.get('.pricetag.jumbotron').children('.productcart').eq(6).click();

        cy.log('**Order products**');
        cy.get('.productpagecart').children('li').eq(0).click();
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();

        cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
    
    })
})



