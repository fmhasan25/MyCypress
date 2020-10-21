describe('Cypress commands testing',()=>{


    before('navigating to the browser',()=>{
        cy.visit('https://example.cypress.io/commands/actions')
    })
    it('Focus',()=>{
        cy.get('.action-focus').focus()
                                .should('have.class', 'focus')
                                .prev().should('have.attr', 'style', 'color: orange;')

    })
    it('blur()',()=>{
        cy.get('.action-blur').type('About to blur').blur()
                              .should('have.class', 'error')
                              .prev().should('have.attr', 'style', 'color: red;')

    cy.get('.action-clear').type('Clear this text')
                           .should('have.value', 'Clear this text')
                           .clear()
                           .should('have.value', '')

    })
    it('click()',()=>{

        cy.get('.action-btn').click()
        cy.get('#action-canvas').click()
                                .click('top')
                                .click('topRight')
                                .click('topLeft')
                                .click('right')
                                .click('left')
                                .click('center')
                                .click('bottom')
                                .click('bottomRight')
                                .click('bottomLeft')
                                .click(170,75)

    })
    it('dbclick()',()=>{

        cy.get('.action-div').dblclick().should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')
                            

    })

    it('clicking multiple elements',()=>{
        // click multiple elements by passing multiple: true
        cy.get('.action-labels>.label').click({ multiple: true })

        // Ignore error checking prior to clicking
cy.get('.action-opacity>.btn').click({ force: true })

    })

})