describe('Access to Dashboard', () => {
    it('Dashboard', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(1000)
        cy.scrollTo('center')
        cy.wait(5000)
        cy.get('.bi-gear-fill').click()
        cy.get('.oxd-switch-input').click()
        cy.get('.oxd-button--secondary').click()
        cy.scrollTo('bottom')
          })
          
    })
  