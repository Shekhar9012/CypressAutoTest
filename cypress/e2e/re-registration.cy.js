describe('Registration functionality', () => {
    it('Register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('RCB111')
        cy.get("input[id='customer.lastName']").type('Virat111')
        cy.get("input[id='customer.address.street']").type('Banglore')
        cy.get("input[id='customer.address.city']").type('Banglore')
        cy.get("input[id='customer.address.state']").type('Karnataka')
        cy.get("input[id='customer.address.zipCode']").type('201012')
        cy.get("input[id='customer.phoneNumber']").type('9818092400')
        cy.get("input[id='customer.ssn']").type('12345678')
        cy.get("input[id='customer.username']").type('Virat Kohli111')
        cy.get("input[id='customer.password']").type('@Test1234')
        cy.get('#repeatedPassword').type('@Test1234')
        cy.get("[colspan='2'] > .button").click()
        //cy.get("span[id='customer.username.errors']").should('have.text','This username already exists.')
        cy.screenshot('registration.cy.js')
          })
          
    })
  