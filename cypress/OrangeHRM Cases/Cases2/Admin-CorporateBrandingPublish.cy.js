describe('Corporate Branding Publishing in Admin section', () => {
    it('Corporate Branding tab operation', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {headers: {"Accept-Encoding": "gzip, deflate"}})
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin') 
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click() 
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click() //Clicking on more button to show more options
        cy.get('.oxd-dropdown-menu > :nth-child(2) > li').click() //Select the corporate branding option from more list
        //cy.wait(3000)
        //Color picker
        /*
        cy.get(':nth-child(1) > .oxd-input-group > .orangehrm-color-input-wrapper > .oxd-color-input').click()
        cy.get('input[type="range"]').click()
        cy.contains('.oxd-color-picker-indicator', 'Black').click();
        */

        //cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").selectFile("C:\\Users\\Lenovo\\Downloads\\1501179.jpg")
        
        
        //Upload file
        /*
        cy.fixture('sample_640×426.jpeg').then(fileContent => {
          cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)").then(input => {
            const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
            const file = new File([blob], 'sample_640×426.jpeg', { type: 'image/jpeg' });
        
            const fileList = [file];
            const dataTransfer = new DataTransfer();
            fileList.forEach(file => dataTransfer.items.add(file));
            input[0].files = dataTransfer.files;
        
            cy.wrap(input).trigger('change', { force: true });
          
            */
            cy.get('.oxd-button--secondary').click()
          });
        });
          
      //})
          
    //})