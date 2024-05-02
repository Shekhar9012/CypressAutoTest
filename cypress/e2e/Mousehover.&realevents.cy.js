describe('Mouse hover', () => {
    it('real events demo', () => {
        cy.visit('https://www.yatra.com/', {headers: {"Accept-Encoding": "gzip, deflate"}})
        //cy.get('.more-arr').trigger('mouseover')
        cy.get('.moreOption').invoke('show') //Simple mouseover using invoke and trigger
        //cy.get('.more-arr').realHover()
        cy.get('#booking_engine_trains > :nth-child(2)').click()    
        })

       
        
          })
          
     