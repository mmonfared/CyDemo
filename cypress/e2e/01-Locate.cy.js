/// <reference types = 'cypress' />

it("Locate & Traversal", () => {
  cy.visit("https://www.play2.automationcamp.ir/index.html");
  cy.contains("Singer").siblings().parent();
  cy.contains("Singer").parents();
  cy.get("#fname").closest("div").should("have.class", "main");
  cy.get("[value='td1_value']").next();
  cy.get("[value='td1_value']").nextAll();
  cy.get("[value='td1_value']").nextUntil("[value='td4_value']");
  cy.get("[value='td5_value']").prev();
  cy.get("[value='td5_value']").prevAll();
  cy.get("[value='td5_value']").prevUntil("[value='td1_value']");
});
