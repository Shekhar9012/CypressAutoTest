describe('PIM section operation(Search,Add,Update details)', () => {
    it('PIM nav bar operation', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        //Search the Employee Info
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('dd')
        cy.get(':nth-child(2) > .oxd-input').type('1234')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').should('be.visible') .contains('Freelance') .click();
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').should('be.visible') .contains('Past Employees Only') .click();
        //cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('')
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').should('be.visible') .contains('QA Engineer') .click();
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').should('be.visible') .contains('Marketing') .click();
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()//Search button 
        cy.get('.oxd-button--ghost').click()//Reset the searc
        cy.wait(5000)
        //Add the employee
        cy.get('.orangehrm-header-container > .oxd-button').click() // click on add button to open the form
        //cy.get('.oxd-file-div > .oxd-icon-button').selectFile("C:\\Users\\Lenovo\\OneDrive\\Desktop\\Shekhar Chauhan.png")  
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Shekhar') 
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Chauhan')
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Rajput')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('813543264358')  
        cy.get('.oxd-button--secondary').click()
        cy.wait(5000)
        //Personal deatils adding
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('56464234858')
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('1394646638')
        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
        //cy.get('.oxd-select-dropdown').should('be.visible').select('2024-09-05')
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').should('be.visible').contains('Indian').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').should('be.visible').contains('Single').click()
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click()
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        cy.wait(5000)
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown').should('be.visible').contains('AB+').click()
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Dashboard')
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
        cy.wait(6000)
        cy.get('.--visited').click() //click on employee list tab from top
        cy.scrollTo('bottom')





    })  
})