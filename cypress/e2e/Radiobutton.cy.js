describe('Checkbox functionality', () => {
    it('Checkbox demo', () => {
        cy.visit('https://www.yatra.com/', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get('.txt-ellipses').click()
        cy.get('div[class="flight_passengerBox dflex relative"] li:nth-child(2) span:nth-child(1)').click()


            
        })

       
        
          })
          
    
  