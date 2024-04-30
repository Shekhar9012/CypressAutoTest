describe('Clear text functionality', () => {
    it('Clear text demo', () => {
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        cy.get("[name='userfile']").selectFile("C:\\Users\\Lenovo\\OneDrive\\Desktop\\Interviews files\\Bugs life cycle.pdf")         
       
          })
          
    })
  