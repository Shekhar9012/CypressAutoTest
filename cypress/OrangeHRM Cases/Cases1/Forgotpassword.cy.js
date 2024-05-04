describe('Forgot Password', () => {
    it('Forgot Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')
        cy.get('.oxd-button').click() 
        cy.wait(4000)
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.get('.oxd-button--ghost').click()
        cy.wait(4000)
        cy.get('.orangehrm-login-forgot > .oxd-text').click()
        cy.get('.oxd-input').type('Admin12')
        cy.get('.oxd-button--secondary').click()
    
          })
          
    })
  