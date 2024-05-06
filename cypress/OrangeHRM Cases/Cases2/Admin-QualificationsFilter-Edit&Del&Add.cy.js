describe('Qualifications filter operations in Admin section', () => {
    it('Qualifications filter', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click() // clicking on Qualifications dropdown
        cy.get('.oxd-dropdown-menu > :nth-child(4)').click() // Selecting the Languages option from dropdown list
        cy.get('.oxd-button').click() //clicking on Add button to add language
        cy.get(':nth-child(2) > .oxd-input').type('Spanish7')
        cy.get('.oxd-button--secondary').click() // Click on Save button to save the added language
        cy.wait(2000)
        //Edit the added language by clicking edit icon
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-input').clear().type('Arabic8')
        cy.get('.oxd-button--secondary').click()
        cy.wait(2000)
        // Delete the language from the list
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click() // Select the checkbox
        cy.scrollTo('top')
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()


       
        

 
          })
          
    })