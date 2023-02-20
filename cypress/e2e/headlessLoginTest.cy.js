///<reference types="cypress"/>

import * as user from '../fixtures/user.json';
import { headlessLogin } from '../support/helper';

it('open account page', () => {

    headlessLogin(user);

    cy.visit('/index.php?rt=account/account');

    cy.log('**Verify user first name on account page**')
    cy.get('h1 span.subtext').should('contain', user.firstName)
})

it('order history', () => {

    headlessLogin(user);

    cy.visit('/index.php?rt=account/history'); 

    cy.log('**Verify user first name on account page**')
    cy.get('h1 span.maintext').should('contain', ' My Order History')
})


