describe('Searchbox Test', ()=>{

before(function(){
//Navigating to the browser
    cy.visit('http://zero.webappsecurity.com/index.html')
    
})
//selecting the searchbox and insert the text
it('Should show the search result page',()=>{
cy.get('#searchTerm').type('some text {enter}')
//TODO

})

it('Should show the search result page',()=>{
    cy.get('h2').contains('Search Results:')
    //TODO
    
    })
})