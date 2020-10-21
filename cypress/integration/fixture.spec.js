describe('Login with Fixtures Data',()=>{

    it('should try to Login',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout:10000})
        cy.fixture('user1').then((user1) =>{
            const username= user1.username
            const password =user1.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()
        })
        
    })

})