/// <reference types="cypress" />

const item_size = '.current';
const item_discounted_price = '.new_price'

class productdetails{

    validate_item_size(size){
     cy.get(item_size).should('have.text',size);
    }

    return_item_size(){
        return item_size;
    }

    validate_discounted_price(price){
        cy.get(item_discounted_price).should('have.text',price); 
    }

    return_discount_price(){
        return item_discounted_price
    }
}

export default productdetails