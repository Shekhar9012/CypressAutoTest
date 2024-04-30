describe('Login functionality', () => {
    it('Login user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > form > div:nth-child(2) > input').type('Virat Kohli')    
        cy.get(':nth-child(4) > .input').type('@Test1234')
        cy.get(':nth-child(5) > .button').click()  
        //cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        //cy.get('#month').select(1)
        //cy.get('#month').select('March')
        //cy.get('#month').select('May')
        //cy.get('#transactionType').select('Credit')
        //cy.get(':nth-child(3) > :nth-child(2) > .button').click() 
          })
          
    })
  