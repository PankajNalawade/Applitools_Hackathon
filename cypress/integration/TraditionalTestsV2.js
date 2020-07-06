import helper from '../helpers/helper.js';
import homepage from '../helpers/PageObject/homepage.js'
import testdata from '../fixtures/testdata.json'
import productdetailspage from '../helpers/PageObject/productdetailspage.js'
const objhelper = new helper();
const objhomepage = new homepage();
const objproductdetailspage = new productdetailspage();
const search_bar_obj = objhomepage.return_searchbar();
const filter_icon_obj = objhomepage.return_filter_icon();
const item_tooltip_obj = objhomepage.return_item_tooltip();
const grid_items_obj = objhomepage.return_grid_item();
const item_size_obj = objproductdetailspage.return_item_size();
const item_discounted_price_obj = objproductdetailspage.return_discount_price();


describe("Task 1", function () {


    beforeEach(function () {        
        objhelper.visit_homepageV2();
        }
    )

    testdata.browserconfig.forEach(function(el){
        it(`Test Name: Search field is displayed, DOM Id: ${search_bar_obj}, Browser: ${el.name}, Device: ${el.device}, Viewport: ${el.height}*${el.width}`,function () {
            objhelper.set_viewports(el.height,el.width);
            objhomepage.check_search_bar_visibility(el.height);
        })   

        it(`Test Name: Validate filter icon, DOM Id: ${filter_icon_obj}, Browser: ${el.name}, Device: ${el.device}, Viewport: ${el.height}*${el.width}`,function(){       
            objhelper.set_viewports(el.height,el.width);
            objhomepage.check_filter_icon(el.height);
        })

        it(`Test Name: Validate item tooltip icons, DOM Id: ${item_tooltip_obj}, Browser: ${el.name}, Device: ${el.device}, Viewport: ${el.height}*${el.width}`,function(){       
            objhelper.set_viewports(el.height,el.width);
            objhomepage.check_item_tooltip(el.height);
        })
    })

});

describe("Task 2", function () {

    beforeEach(function () {        
        objhelper.visit_homepageV2();
        }
    )

    testdata.browserconfig.forEach(function(el){   

        it(`Test Name: Validate number of items after applying black filter, DOM Id: ${grid_items_obj}, Browser: ${el.name}, Device: ${el.device}, Viewport: ${el.height}*${el.width}`,function(){       
            objhelper.set_viewports(el.height,el.width);
            cy.filter_black_products(el.height);
            objhomepage.verify_grid_item();
        })

        it(`Test Name: Validate item tooltip icons, DOM Id: ${item_tooltip_obj}, Browser: ${el.name}, Device: ${el.device}, Viewport: ${el.height}*${el.width}`,function(){       
            objhelper.set_viewports(el.height,el.width);
            cy.filter_black_products(el.height);
            objhomepage.check_item_tooltip(el.height);
        })
    })

});

describe("Task 3", function () {

    beforeEach(function () {        
        objhelper.visit_homepageV2();
        }
    )

    testdata.browserconfig.forEach(function(el){   

        it(`Test Name: Validate item size after selecting the first black shoe, DOM Id: ${item_size_obj}, Browser: ${el.name}, Device: ${el.device}, Viewport: ${el.height}*${el.width}`,function(){       
            objhelper.set_viewports(el.height,el.width);
            cy.filter_black_products(el.height);
            objhomepage.click_first_product();
            objproductdetailspage.validate_item_size(testdata.shoesize);
        })

        it(`Test Name: Validate item discounted price after selecting the first black shoe, DOM Id: ${item_discounted_price_obj}, Browser: ${el.name}, Device: ${el.device}, Viewport: ${el.height}*${el.width}`,function(){       
            objhelper.set_viewports(el.height,el.width);
            cy.filter_black_products(el.height);
            objhomepage.click_first_product();
            objproductdetailspage.validate_discounted_price(testdata.shoediscountedprice);
        })

    })
})
