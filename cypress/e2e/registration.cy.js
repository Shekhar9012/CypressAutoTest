describe('Registration functionality', () => {
    it('Register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('RCB1')
        cy.get("input[id='customer.lastName']").type('Virat1')
        cy.get("input[id='customer.address.street']").type('Banglore')
        cy.get("input[id='customer.address.city']").type('Banglore')
        cy.get("input[id='customer.address.state']").type('Karnataka')
        cy.get("input[id='customer.address.zipCode']").type('201012')
        cy.get("input[id='customer.phoneNumber']").type('9818092400')
        cy.get("input[id='customer.ssn']").type('1234567')
        cy.get("input[id='customer.username']").type('Virat Kohli king')
        cy.get("input[id='customer.password']").type('@Test12345')
        cy.get('#repeatedPassword').type('@Test12345')
        cy.get('[colspan="2"] > .button').click()
        cy.screenshot('registration.cy.js')
          })
          
    })
  