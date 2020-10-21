describe('Password Testing',()=>{

    it('Navigating to the browser',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('clicking sigin in button',()=>{
        cy.get('#signin_button').contains('Signin').click()
    })

    it('Putting the username',()=>{
        cy.get('#user_login').type('some id')
    })

    it('Putting the password',()=>{
        cy.get('#user_password').type('some password')
    })
    it('Clicking the go button',()=>{
        cy.get('.btn.btn-primary').click()
    })
    it('Clicking forget password',()=>{
        cy.get('a').contains('Forgot your password ?').click()
        cy.get('#user_email').type('something@gmail.com')
        cy.get('.btn.btn-primary').click()
    })
})