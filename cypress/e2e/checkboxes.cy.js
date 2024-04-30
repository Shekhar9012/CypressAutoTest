describe('Checkbox functionality', () => {
    it('Checkbox demo', () => {
        cy.visit('https://www.yatra.com/', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get('a[title="Non Stop Flights"]').click()
        cy.wait(500)
        cy.get('#seniorcitizen_offer > .custom-check').click() //selecting particular checkbox
        //cy.get('[type="checkbox"]').click({ multiple: true }) // Selecting all checkboxes




            
        })

       
        
          })
          
    
  