/* 
    This file simplifies test execution by providing commonly used functions
*/

/// <reference types="cypress" />

class helper{
    
    visit_homepageV1() {
        cy.visit(Cypress.env("AppliFashionV1"))
    }

    visit_homepageV2() {
        cy.visit(Cypress.env("AppliFashionV2"))
    }
    
    open_eye(appname,testname) {
        cy.eyesOpen({
            appName: appname,
            testName: testname
          });
    }

    eyes_check_window_region(name,object) {
        cy.eyesCheckWindow({
            tag: name,
            target: 'region',
            selector: {
                type: 'css',
                selector: object
            }
        })
    }

    eyes_check_window_page(name) {
        cy.eyesCheckWindow(name);
    }


    
    set_viewports(height, width){
        cy.viewport(height, width)
    }
    
    close_eye(){
        cy.eyesClose()
    }
}

export default helper;


