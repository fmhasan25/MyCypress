

describe('Working with inputs',()=>{

    // it('Should override the current time',()=>{
    //     const date = new Date(2020, 9, 28).getTime() //return a timestamp
    //     cy.clock(date)
    //     cy.log(date)
    // })

    it('Navigating to the browser',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout:10000})
        cy.clearCookies({log:true})
        cy.clearLocalStorage(' your item',{log: true})
        cy.title().should('include','Zero - Log in')
        
    })
    it('should fill username',()=>{
        cy.get('#user_login').as('username')
       cy.get('@username').clear()
       cy.get('@username').type('Some Invalid Name',{delay: 50})
    })
    it('should fill password',()=>{
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Some Invalid Name',{delay: 50})
       
    })
    it('should click the checkbox',()=>{
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('should submit login form',()=>{
        cy.contains('Sign in').click()
    })
   
    it('should display error message',()=>{
        cy.get('.alert-error').should('be.visible')
            .and('contain','Login and/or password are wrong.')
    })
})