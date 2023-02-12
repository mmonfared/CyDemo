/// <reference types = "cypress"/>

// Events > cy.on()

it('Alerts - Accept', function () {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.contains('Click for JS Confirm').click()
    cy.on('window:confirm', function (message) {
        expect (message).eq('I am a JS Confirm')
    })
    cy.get("#result").should('have.text', 'You clicked: Ok')
    cy.get("#result").invoke('text').should('equal', 'You clicked: Ok')
});

it('Alerts - Dismiss', function () {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.contains('Click for JS Confirm').click()
    cy.on('window:confirm', function (message) {
        expect (message).eq('I am a JS Confirm')
        return false // Do action on event
    })
    cy.get("#result").should('have.text', 'You clicked: Cancel')
    cy.get("#result").invoke('text').should('equal', 'You clicked: Cancel')
});
