describe('Cypress commands testing',()=>{


    before('navigating to the browser',()=>{
        cy.visit('https://example.cypress.io/commands/actions')
    })
    it('Type testing',()=>{
        cy.get('#email1').type('fake@email.com')
                        .should('have.value','fake@email.com') 
                        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
                          // .type() with key modifiers
                        .type('{alt}{option}') //these are equivalent
                        .type('{ctrl}{control}') //these are equivalent
                        .type('{meta}{command}{cmd}') //these are equivalent
                        .type('{shift}')
                        .clear()
                          // Delay each keypress by 0.1 sec
  .type('slow.typing@email.com', { delay: 100 })
  .should('have.value', 'slow.typing@email.com')

  cy.get('.action-disabled').should('be.disabled')
                            .type('Hello',{force:true})
                            .should('have.value','Hello')

    })



})