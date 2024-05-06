describe('Filters in admin section', () => {
    it('User Jobs Organizations Qualifications Nationalities Corporate branding Configurations', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(1000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click() //click on job filter
        cy.get('.oxd-dropdown-menu > :nth-child(4)').click() //select the option from dropdwon
        //cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click() //Select the checkbox
        //Edit the Job Catgory
        /*
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click() //click on edit icon
        cy.get(':nth-child(2) > .oxd-input').clear().type('Craft Employee11') // Entering the input 
        cy.get('.oxd-button--secondary').click() //clicking the save button
        cy.wait(5000)
        //Delete the Job catgoey
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get('.oxd-button--label-danger').click()
        */
        //Add the New job Catgory
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('Manual Testing1')
        cy.get('.oxd-button--secondary').click()
          })
          
    })