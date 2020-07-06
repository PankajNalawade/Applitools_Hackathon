/// <reference types="cypress" />
const colorsOption_black = '#LI____103';
const collapse_containers = '.collapse.show'
const filter_button = '#filterBtn';
const product_grid = '#product_grid';
const first_product = '#product_1';
const filter_icon = '.ti-filter';
const search_bar = '.custom-search-input';
const item_tooltip = '.tooltip-1';
const grid_items = '.grid_item';

class homepage{


    click_on_black_color_option()  {
        cy.get(collapse_containers).eq(1).contains('Black').click();
    }
    
    click_on_filter_button()  {
        cy.get(filter_button).click();
    }
    
    get_product_grid()  {
        cy.get(product_grid);
    }

    get_filter_icon(){
        return cy.get(filter_icon);
    }
    
    click_filter_icon(){
        cy.get(filter_icon).click();
    }

    click_first_product(){
        cy.get(first_product).click();
    }

    get_product_grid(){
        return product_grid;
    }

    check_search_bar_visibility(height){           
        if (height >= 768){
            cy.get(search_bar).should('be.visible');
        }
        else {
            cy.get(search_bar).should('not.be.visible');
            }          
    }

    return_searchbar(){
        return search_bar;
    }

    check_filter_icon(height){
        if (height < 992){
            cy.get(filter_icon).should('be.visible');
        }
        else {
            cy.get(filter_icon).should('not.be.visible');
        }
    }

    return_filter_icon(){
        return filter_icon;
    }

    check_item_tooltip(height){
        if (height < 992){
            cy.get(item_tooltip).should('be.visible');
        }
        else {
            cy.get(item_tooltip).should('not.be.visible');
        }
    }

    return_item_tooltip(){
        return item_tooltip
    }

    verify_grid_item(){
        cy.get(grid_items).should('have.length',2);
    }

    return_grid_item(){
        return grid_items
    }

}

export default homepage;
