/// <reference types = "cypress"/>

// JavaScript commands

it('Dialog ', function () {
    cy.visit('https://v13.material.angular.io/components/dialog/examples')
    cy.get('.mat-primary > .mat-button-wrapper').click()
    cy.get('.docs-navbar-header > [href="/cdk"] > .mat-button-wrapper').then(function (cdk) {
        cy.get('#dialog-data > .docs-example-viewer-wrapper > .docs-example-viewer-body >' +
            ' .ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.wait(1000)
        let rect = cdk[0].getBoundingClientRect() // JS
        cy.document().then(function (doc) {
            doc.elementFromPoint(rect.x, rect.y).click() // click on a point using document object
        })
    })
});
