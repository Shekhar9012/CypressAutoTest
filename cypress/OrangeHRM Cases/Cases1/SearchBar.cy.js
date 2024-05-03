describe('Aceess the NavBar', () => {
    it('Clciking every option available in NavBar', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(1000)
        cy.get('.oxd-main-menu-search').click()
        cy.get('.oxd-input').type('Buzz').click()
        cy.get('.oxd-main-menu-item').click()
    })
})