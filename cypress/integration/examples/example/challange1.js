describe('Books to Scrape',()=>{

it('navigating to yahoo website',()=>{
    cy.visit('http://yahoo.com')
})
//you can create one method for one command
it('should click the category',()=>{
    cy.get('a[class="_yb_1i7te"]').contains('Sign in').click()
    //so far so good

})

it('should click the book',()=>{
    cy.get('input[class="phone-no"]').type('email')
})






})