describe('Feedback Test',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Clicking feedback button',()=>{
        cy.contains('Feedback').click()
    })

    it('putting the user name',()=>{
        cy.get('#name').type('some Name')
    })

    it('putting the email',()=>{
        cy.get('#email').should('be.visible').type('some@gmail.com')
    })

    it('putting the text',()=>{
        cy.get('#subject').type('Hello World')
    })

    it('comment',()=>{
        cy.get('#comment').type('Hello World, My name is firoz')
    })
})