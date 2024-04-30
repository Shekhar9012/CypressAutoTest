describe('Launch Application', () => {
    it('Launch the application', () => {
        cy.visit('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26tag%3Dgooghydrabk1-21%26ref%3Dnav_ya_signin%26adgrpid%3D155259815513%26hvpone%3D%26hvptwo%3D%26hvadid%3D674842289437%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D7054122081048419384%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9300211%26hvtargid%3Dkwd-10573980%26hydadcr%3D14453_2316415%26gad_source%3D1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
        
        // Mobile number validation
        cy.get('#ap_email')
            .type('9818873080')
            .should('have.value', '9818873080')
        cy.get('.a-button-inner > #continue').click()
        
        // Password validation
        cy.get('#ap_password')
            .type('@Test1234')
            .should('have.value', '@Test1234')
    
        
        // Click on Sign in button
        cy.get('#signInSubmit').click()

        // Assertion for successful login - you might need to update this according to your application behavior
        cy.url().should('include', 'https://www.amazon.in/?tag=googhydrabk1-21&ref=nav_ya_signin&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=7054122081048419384&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9300211&hvtargid=kwd-10573980&hydadcr=14453_2316415&gad_source=1')
    })
})
