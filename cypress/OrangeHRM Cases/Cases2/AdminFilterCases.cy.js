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
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() //Click on Organization filter
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() //Select the option from the dropdown
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click() //Click on qualifications filter
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // Select the option from the dropdown list
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click() // click on more option showing list
        cy.wait(2000)
        cy.get('.oxd-dropdown-menu > :nth-child(1) > li').click() // select the option from more list "Nationalities"
        cy.wait(2000)
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click()// click on more option showing list
        cy.get('.oxd-dropdown-menu > :nth-child(2) > li').click() // select the option from more list "Corporate Branding"
        cy.wait(2000)
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click()// click on more option showing list
        cy.get(':nth-child(3) > li').click() //select the option from more list "Configuration"
        cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(6)').click()// Select the option from config dropdwon


        
          })
          
    })