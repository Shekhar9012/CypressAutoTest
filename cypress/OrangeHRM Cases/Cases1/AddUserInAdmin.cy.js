describe('Add user in Admin section', () => {
    it('Add User', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        //cy.wait(500)
        //cy.contains('.oxd-select-dropdown', 'ESS').click();
        cy.get('.oxd-select-dropdown').should('be.visible').contains('ESS').click();
        cy.get('.oxd-autocomplete-text-input > input').type('ViratKing@1234')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').should('be.visible').contains('Enabled').click();
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ViratRunMachine')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('@@Test12345678')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('@@Test12345678')
        cy.get('.oxd-button--secondary').click()
          })
          
    })