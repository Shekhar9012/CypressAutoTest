describe('Clear text functionality', () => {
    it('Clear text demo', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > form > div:nth-child(2) > input').type('Virat Kohli')
        cy.get('#loginPanel > form > div:nth-child(2) > input').clear()   // Clear the text 
        cy.get(':nth-child(4) > .input').type('@Test1234')
        //cy.get(':nth-child(5) > .button').click()  
        cy.scrollTo('bottom')
        cy.scrollTo('top')
        cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').scrollIntoView()
          })
          
    })
  