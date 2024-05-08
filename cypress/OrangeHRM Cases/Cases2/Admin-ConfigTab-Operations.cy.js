describe('Configuration operations in Admin section', () => {
    it('Configuration tab operation', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click() //Clicking on more button to show more options
        cy.get(':nth-child(3) > li').click() //click on config option from more list
        cy.wait(2000)
        //Email config operations
        cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(1)').click()
        cy.get(':nth-child(2) > .oxd-input').clear()
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-input').type('personal.shekharchauhan@gmail.com')
        cy.get('.oxd-switch-input').click()
        cy.get(':nth-child(4) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('personal.shekharchauhan@gmail.com')
        cy.get('.oxd-button--secondary').click()
        cy.wait(4000)
        // Email Subscriptions
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click() 
        cy.get(':nth-child(3) > li').click() 
        cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(2)').click()
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 15%;"] > .oxd-table-cell-actions > .oxd-icon-button').click()
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Virat The King')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test30@gmail.com')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.wait(4000)
        //Localization operation
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click()
        cy.get(':nth-child(3) > li').click() 
        cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(3)').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        //cy.get(':nth-child(2) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-button').click()
        cy.wait(4000)
        //Language packages
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click() 
        cy.get(':nth-child(3) > li').click() 
        cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(4)').click()
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        //cy.get('.oxd-select-text').click().
        cy.get('.oxd-select-text').click(); // Click to open the dropdown
        //cy.get('.dropdown-menu').should('be.visible');
        //cy.get('.oxd-select-text-input').contains('Bodo (India)').click()


          });
    
        });
          
      