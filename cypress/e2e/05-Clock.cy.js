/// <reference types='cypress'/>

  it("Tick forward", () => {
    cy.visit('https://play1.automationcamp.ir/expected_conditions.html')
    cy.get('#min_wait').clear().type(7)
    cy.get('#max_wait').clear().type(7)
    cy.get('#visibility_target').should('not.be.visible')
    cy.clock()
    cy.get('#visibility_trigger').click()
    cy.tick(7000)
    cy.get('#visibility_target').should('be.visible')

  })
