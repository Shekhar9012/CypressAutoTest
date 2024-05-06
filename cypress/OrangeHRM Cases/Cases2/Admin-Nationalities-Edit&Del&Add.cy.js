describe('Nationalities operations in Admin section', () => {
    it('Nationalities tab operation', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click() //Clicking on more button to show more options
        cy.get('.oxd-dropdown-menu > :nth-child(1) > li').click() //Clicking on nationalities option from more list
        cy.wait(3000)
        //Add the nationalities by clicking Add button
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('Indians6')
        cy.get('.oxd-button--secondary').click()
        cy.wait(4000)
        //Select the checkbox and delete the added Nationalities
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.scrollTo('top')
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
        cy.wait(4000)
        //Edit the added Nationalities by clickng edit icon
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-input').clear().type('AfgahniJalebi')
        cy.get('.oxd-button--secondary').click()
        
        
        
          })
          
    })