/// <reference types="Cypress" />

// + Custom Commands

let user1 = "flutter@flutter.com"
let user2 = "poker@flutter.com"
let pass = "flutterflutter"

describe("Login by UI", function() { //10 seconds
    beforeEach(function(){
        cy.visit("https://app.clockify.me/en/login")
        cy.get("input#email").type(user1)
        cy.get("input#password").type(pass)
        cy.get("button[type=submit]").click()
    })
    it('Test1', function(){
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })

    it('Test2', function(){
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })

    it('Test3', function(){
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
})

describe("Login by API", function() {  //4 Seconds
    beforeEach(function(){
        cy.request('POST', 'https://global.api.clockify.me/auth/token',
        {email: user1, password: pass})
        .then(($resp) => {
            expect($resp.status).to.eq(200)
            window.localStorage.setItem('token', $resp.body.token)
        })
    })
    it('Test1', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
    it('Test2', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
    it('Test3', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
})

describe("cy.session() - UI", function() {  //5 Seconds
    beforeEach(function(){
        cy.session('sessionUI', () => {
            cy.visit("https://app.clockify.me/en/login")
            cy.get("input#email").type(user1)
            cy.get("input#password").type(pass)
            cy.get("button[type=submit]").click()
            cy.location('pathname').should('eq','/tracker')
        })
    })
    it('Test1', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
    it('Test2', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
    it('Test3', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
})

describe("cy.session() - API", function() {  // 3 Seconds
    beforeEach(function(){
        cy.session('sessionAPI', () => {
            cy.request('POST', 'https://global.api.clockify.me/auth/token',
            {email: user1, password: pass})
            .then(($resp) => {
                expect($resp.status).to.eq(200)
                window.localStorage.setItem('token', $resp.body.token)
        })
        })
    })
    it('Test1', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
    it('Test2', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
    it('Test3', function(){
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
    })
})

describe('Multiple Session', function() {
    it('Multiple Session', () => {
        // Create
        cy.loginUsingAPI(user1, pass) // Custom Commands
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
        cy.loginUsingAPI(user2, pass)
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Poker')
        // Switch
        cy.loginUsingAPI(user1, pass)
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
        cy.loginUsingAPI(user2, pass)
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Poker')
    })
})

describe('Logout', function () {
    it('Logout', () => {
        cy.loginUsingAPI(user1, pass)
        cy.visit("https://app.clockify.me")
        cy.get("[data-cy=workspace-dropdown]").should('contain.text', 'Flutter')
        cy.logout()
        cy.get("input#email").should('be.visible')
    })
})

describe('Cookies', function () {
    it('Cookies', () => {
        Cypress.Cookies.debug(true)
        cy.visit("https://app.clockify.me")
        cy.setCookie('MyCookie', 'automationcamp')
        cy.getCookie('MyCookie').should('have.property', 'value', 'automationcamp')
        .then( (cookie) => {
            console.log(cookie)
        })
        cy.clearCookie('MyCookie')
        cy.getCookie('MyCookie').should('be.null')
        cy.clearAllCookies()
    })
})
