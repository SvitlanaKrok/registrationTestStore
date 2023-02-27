export default class BasePage{

    searchField(){
        return cy.get('#filter_keyword');
    }

}
