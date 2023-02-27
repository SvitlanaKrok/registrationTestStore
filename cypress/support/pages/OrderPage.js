import BasePage from "./BasePage";


class OrderPage extends BasePage {

    getCategoryMenu(){
       return cy.get('.nav-pills.categorymenu').children('li').eq(2);
    }
    getSubCategory(){
        return cy.get('.thumbnails.row').children('li').eq(0);
    }
    getSubCategoryList(){
        return cy.get('.col-md-3.col-sm-6.col-xs-12').children('.thumbnail').eq(0);
    }
    getFilterField(){
        return cy.get('input#filter_keyword');
     }
     getSearchButton(){
        return cy.get('.fa.fa-search').first();
     }
    getProduct(){
        return cy.get('.productpagecart').children('li').eq(0);
    }
    getChangeQuantity(){
        return cy.get('#cart_quantity50');
    }
    getAddToCart(){
        return cy.get('.productpagecart').children('li');
    }
    getCheckout(){
        return cy.get('#cart_checkout1');
    }
    getConfirmOrder(){
        return cy.get('#checkout_btn').click();
    }
    verifyErrorAppears(){
        cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
    }
    filterProductByLetter(){
        cy.log('Filtering product by letter');
        
        this.getFilterField().type('E');
        this.getSearchButton().click();
    }
    addProductToCart(){
    cy.log('Add product to basket')

        this.getCategoryMenu().click();
        this.getSubCategory().click();
        this.getSubCategoryList().click();
        this.getChangeQuantity().clear().type('2');
        this.getProduct().click();
    }
    makeOrder(){
        cy.log('Make order')

        this.getAddToCart().click();
        this.getCheckout().click();
        this.getConfirmOrder();
    }


}

export default new OrderPage;