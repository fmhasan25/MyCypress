describe('Browser Actions',()=>{
    it('should load the correct url',()=>{
        cy.visit("http://example.com/",{timeout:10000 })
    })

    it('should check correct url',()=>{
        cy.url().should('include','example.com')
    })
    it('should wait for 3 sec', ()=>{
        cy.wait(3000)
    })
    it('should pause the execution', ()=>{
        cy.pause()
    })

    it('should check correct element on the page',()=>{
        cy.get('h1').should('be.visible')
    })
})


