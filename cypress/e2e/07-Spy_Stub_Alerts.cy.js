/// <reference types='cypress'/>

describe('Spy/Stub', () => {
    beforeEach( () => {
        cy.visit('spy-stub.html')
    })
    it('Spy', () => {
        cy.window().then((win) => {
            cy.spy(win.console, 'log').as('consoleLog')
        })
        cy.get('#console-log').click()
        cy.get('#console-log').click()
        cy.get('@consoleLog').should('be.calledWith', 'Hello World!')
        cy.get('@consoleLog').should('be.calledTwice')

    })

    it('Stub-window.print()', () => {
        cy.window().then((win) => {
            cy.stub(win, 'print').as('winPrint')
        })
        cy.get('#print-window').click()
        cy.get('@winPrint').should('be.called')
        cy.get('#console-log').click()
    })

    it('Stub-window.open()', () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#open-window').click()
        cy.get('@winOpen').should('be.calledWith', 'https://google.com')
        cy.get('#console-log').click()
    })

    it('Stub-Alert', function () {
        cy.window().then( (win) => {
           cy.stub(win, 'alert').as('winAlert')
        })
        cy.get('#alert').click()
        cy.get('@winAlert').should('be.calledWith', 'I am a JS Alert')

    })
    it('Stub-Confirm-Accept', function () {
        cy.window().then( (win) => {
           cy.stub(win, 'confirm').returns(true).as('winConfirm')
        })
        cy.get('#confirm').click()
        cy.get('@winConfirm').should('be.calledWith', 'I am a JS Confirm')
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })
    it('Stub-Confirm-Cancel', function () {
        cy.window().then( (win) => {
           cy.stub(win, 'confirm').returns(false).as('winConfirm')
        })
        cy.get('#confirm').click()
        cy.get('@winConfirm').should('be.calledWith', 'I am a JS Confirm')
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })
    it('Stub-Prompt', function () {
        cy.window().then( (win) => {
           cy.stub(win, 'prompt').returns('My prompt message').as('winPrompt')
        })
        cy.get('#prompt').click()
        cy.get('@winPrompt').should('be.calledWith', 'I am a JS Prompt')
        cy.get('@winPrompt').should('have.returned', 'My prompt message')
        cy.get('#result').should('have.text', 'You entered: My prompt message')
    })

})
