import helper from '../helpers/helper.js';
import homepage from '../helpers/PageObject/homepage.js'
const objhelper = new helper();
const objhomepage = new homepage();


describe("Cross-Device Elements Test", function () {

    beforeEach(function () {
        //This load testdata.json fixture
        cy.fixture("testdata.json").then(function(data) {
            this.data = data;
        });

        objhelper.visit_homepageV2();
        }
    )

    it("Task 1",function () {
        objhelper.set_viewports(this.data.commonheight,this.data.commonwidth)
        objhelper.open_eye(this.data.appname, 'Task 1');
        objhelper.eyes_check_window_page(this.data.teststep01);
        objhelper.close_eye();   
        }
    )
    
    it("Task 2",function () {
        objhelper.open_eye(this.data.appname, 'Task 2');
        cy.filter_black_products();
        objhelper.eyes_check_window_region(this.data.teststep02, objhomepage.get_product_grid())
        objhelper.close_eye();        
        }
    )

    it("Task 3",function () {
        objhelper.open_eye(this.data.appname, 'Task 3'); 
        cy.filter_black_products();
        objhomepage.click_first_product();
        objhelper.eyes_check_window_page(this.data.teststep03);
        objhelper.close_eye();     
    })

});
