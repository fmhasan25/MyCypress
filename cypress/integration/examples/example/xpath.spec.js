describe('Xpaths with Cypress Example',()=>{
before (function(){
cy.visit('http://zero.webappsecurity.com/index.html')

})
it('should click on element using xpath',()=>{

    cy.xpath('//*[@id="signin_button"]').should('be.visible')
    cy.xpath('//*[@id="signin_button"]').click()
    cy.xpath('//form').should('have.length',1)
})
it('should display login form',()=>{
    cy.xpath('//form').should('have.length',1)
})
})