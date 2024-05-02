describe('Radio button functionality', () => {
    it('Radio button demo', () => {
        cy.visit('https://www.yatra.com/', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.wait(3000)
        cy.get('.txt-ellipses').click()
        cy.get('div[class="flight_passengerBox dflex relative"] li:nth-child(2) span:nth-child(1)').click()


            
        })

       
        
          })
          
    
  