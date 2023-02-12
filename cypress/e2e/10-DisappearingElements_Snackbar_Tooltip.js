/// <reference types = "cypress"/>

// realEvents Plugin

it('Snackbar (Toast Message) - By Text', function () {
    cy.visit('https://v13.material.angular.io/components/snack-bar/examples')
    cy.get('.mat-primary > .mat-button-wrapper').click()
    cy.get('#mat-input-0').clear().type(1)
    cy.get('snack-bar-component-example.ng-star-inserted > .mat-focus-indicator').click()
    cy.get(".cdk-global-overlay-wrapper").within(function () {
        cy.contains("Pizza party")
    })
});

it('Snackbar (Toast Message) - By Selector', function () {
    cy.visit('https://v13.material.angular.io/components/snack-bar/examples')
    cy.get('.mat-primary > .mat-button-wrapper').click()
    cy.get('#mat-input-0').clear().type(1)
    cy.get('snack-bar-component-example.ng-star-inserted > .mat-focus-indicator').click()
    cy.get(".example-pizza-party").should('exist')
});

it('Tooltip message', function () {
    cy.visit('https://v13.material.angular.io/components/tooltip/examples#tooltip-message')
    cy.get('#mat-input-2').clear().type('AutomationCamp Tooltip')
    cy.get('tooltip-message-example.ng-star-inserted > .mat-focus-indicator').realHover()
    cy.get('.cdk-overlay-container').last().within( function () {
        cy.contains('AutomationCamp Tooltip')
    })
});
