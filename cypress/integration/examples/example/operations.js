
///<reference types="Cypress" />

describe('Browser Actions', () => {
    it('should load the books website', () => {
        cy.visit("http://books.toscrape.com/index.html",{timeout:10000 })
        cy.url().should('include','index.html')
        cy.log('Before Loaded')
        cy.reload()
        cy.log('After Reload')
    })
    it('should click on travel category', () => {
     cy.get('a')
     .contains('Travel')
     .click()
     cy.get('h1').contains('Travel')
    })

    it('should display correct number of books',()=>{
        cy.get('.product_pod').its('length').should('eq',11)


    })
    
   
})