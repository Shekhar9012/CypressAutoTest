describe('Access to the Admin section', () => {
    it('Admin section', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-input').type('AdminAdmin')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        // Select the option by its text
        cy.get('.oxd-select-dropdown').contains('Admin').click()
        cy.get('.oxd-autocomplete-text-input > input').type('A8DCo 010Z')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains('.oxd-select-dropdown', 'Enabled').click();
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        
    
          })
          
    })
  