describe('Launch Application', () => {
    it('Launch the application', () => {
        cy.visit('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26tag%3Dgooghydrabk1-21%26ref%3Dnav_ya_signin%26adgrpid%3D155259815513%26hvpone%3D%26hvptwo%3D%26hvadid%3D674842289437%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D7054122081048419384%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9300211%26hvtargid%3Dkwd-10573980%26hydadcr%3D14453_2316415%26gad_source%3D1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
        /*
        cy.get('#createAccountSubmit').click()
        cy.get('#ap_customer_name').type('Shekhar Chauhan')
        cy.get('#auth-country-picker-container > .a-button-inner > .a-button-text').click()
        cy.get('#auth-country-picker_92').click()
        cy.get('#ap_phone_number').type('9818873080')
        cy.get('#ap_password').type('@Test1234')
        cy.get('#continue').click()
        cy.get('#auth-pv-enter-code').type('032279')
        cy.screenshot('firsttest.cy.js')
        */
       //SIGNIN
       cy.get('#ap_email').type('9818873080')
       cy.get('.a-button-inner > #continue').click()
       cy.get('#ap_password').type('@Test1234')
       cy.get('#signInSubmit').click()
       /*
       //cy.get('#auth-error-message-box > .a-box-inner > .a-alert-heading').should('have.text','There was a problem')
       cy.get('#nav-link-accountList > .nav-line-2').click()
       cy.get(':nth-child(2) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner').click()
       cy.get('.breadcrumbs > :nth-child(1) > .a-link-normal').click()
       cy.get('#nav-hamburger-menu').click()
       //cy.get('#hmenu-content > .hmenu-visible').scrollTo('center') // Scroll 'sidebar' to its bottom
       cy.wait(500)
       cy.get('.hmenu-visible > :nth-child(2) > .hmenu-item').click()
       cy.wait(500)
       cy.get(':nth-child(9) > a').click()
    
       //cy.get(':nth-child(2) > .a-unordered-list > :nth-child(5)').click()
    
       //cy.get('#hmenu-content > .hmenu-visible').scrollTo('center')
       //cy.screenshot('Amazontestcase.cy.js')
       */
          })
          
    })
  