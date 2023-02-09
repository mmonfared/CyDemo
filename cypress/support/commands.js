// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginUsingUI', (email, password) => {
    cy.session(email, () => {
        cy.visit("https://app.clockify.me/en/login")
        cy.get("input#email").type(email)
        cy.get("input#password").type(password)
        cy.get("button[type=submit]").click()
        cy.location('pathname').should('eq','/tracker')
    })
})

Cypress.Commands.add('loginUsingAPI', (email, password) => {
    cy.session(email, () => {
        cy.request('POST', 'https://global.api.clockify.me/auth/token',
        {email: email, password: password})
        .then(($resp) => {
            expect($resp.status).to.eq(200)
            window.localStorage.clear()
            window.localStorage.setItem('token', $resp.body.token)
    })
    }, {cacheAcrossSpecs: true})
})

Cypress.Commands.add('logout', () => {
    // window.localStorage.clear()
    // cy.window().clearLocalStorage()
    cy.clearLocalStorage()
})
