describe('Corporate Branding Publishing in Admin section', () => {
    it('Corporate Branding tab operation', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click() //Clicking on more button to show more options
        cy.get('.oxd-dropdown-menu > :nth-child(2) > li').click() //Select the corporate branding option from more list
        //cy.wait(3000)
        //Color picker
        /*
        cy.get(':nth-child(1) > .oxd-input-group > .orangehrm-color-input-wrapper > .oxd-color-input').click()
        cy.get('input[type="range"]').click()
        cy.contains('.oxd-color-picker-indicator', 'Black').click();
        */
        //cy.get(':nth-child(2) > .orangehrm-file-input > .oxd-input-group > :nth-child(2) > .oxd-file-div').selectFile("C:\\Users\\Lenovo\\Downloads\\1501179.jpg")
          })
          
    })