describe('Dropdown functionality', () => {
    it('Dropdown user', () => {
        cy.visit('https://www.yatra.com/', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get('#BE_flight_origin_city').click().clear().type("New", {Delay:200}).click()  
        //cy.get(':nth-child(1) > .active').click()
        cy.get('.viewport span:last-child').each(($el, index, $list) => {
            cy.log($el.text())
            if($el.text() === 'DEL'){
                cy.wrap($el).click()
            }
            
        })

       
        
          })
          
    })
  