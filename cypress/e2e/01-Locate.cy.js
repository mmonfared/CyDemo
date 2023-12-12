/// <reference types = 'cypress' />

// cy.pause()
// .debug

it("Locate & Traversal", () => {
  cy.visit("https://play2.automationcamp.ir/index.html");
  cy.contains("Singer").siblings().parent();
  cy.contains("Singer").parents();
  cy.get("#fname").closest("div").should("have.class", "main");
  cy.get("[value='td1_value']").next();
  cy.get("[value='td1_value']").nextAll();
  cy.get("[value='td1_value']").nextUntil("[value='td4_value']");
  cy.pause()
  cy.get("[value='td5_value']").prev();
  cy.get("[value='td5_value']").prevAll().debug()
  cy.get("[value='td5_value']").prevUntil("[value='td1_value']");
});
