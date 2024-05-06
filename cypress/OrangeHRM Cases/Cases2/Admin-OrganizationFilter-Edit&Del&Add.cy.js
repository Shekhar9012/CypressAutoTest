describe('Organization filter operations in Admin section', () => {
    it('Organizations filter', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() //Click on Organization filter
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() //Select the option from the dropdown
        // Search the location
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Texas R&D')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Texas')
        cy.get('.oxd-select-text').click();
        cy.contains('.oxd-select-dropdown', 'United States').scrollIntoView().click({ force: true });
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.wait(3000)
        // Add the location
        cy.get('.orangehrm-header-container > div > .oxd-button').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('IT Department Gurgaon')
        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('India')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Haryana')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('2452052')
        cy.get('.oxd-select-text').click();
        cy.contains('.oxd-select-dropdown', 'India', { timeout: 10000 }).click();
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('9876543228')
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('635575')
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Ghaziabad Uttar Pradesh 111009')
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('All good!')
        cy.get('.oxd-button--secondary').click()
        


  







        
          })
          
    })