/// <reference types = 'cypress' />

it("Assert Text", function () {
  cy.visit("https://play1.automationcamp.ir/forms.html");
  cy.get("#check_python").click();
  // 1
  cy.get("#check_validate").should("have.text", "PYTHON");
  // 2
  cy.get("#check_validate").invoke("text").should("eq", "PYTHON");
  // 3
  cy.get("#check_validate").then(function ($el) {
    let elementText = $el.text();
    expect(elementText.includes("PYTHON")).to.be.true;
  });
});

it("State - Checked | Unchecked", function () {
  cy.visit("https://play1.automationcamp.ir/forms.html");
  // Checkbox
  cy.get("#check_python").should("not.be.checked").click().should("be.checked");
  //Radio button
  cy.get("#rad_selenium").should("not.be.checked");
  cy.get("#rad_protractor")
    .should("not.be.checked")
    .click()
    .should("be.checked");
  cy.get("#rad_selenium").should("not.be.checked").click().should("be.checked");
  cy.get("#rad_protractor").should("not.be.checked");
  // Switch (Toggle)
  cy.get(".custom-control.custom-switch input")
    .should("not.be.checked")
    .click({ force: true });
  // cy.get(".custom-control.custom-switch").click()
  cy.get(".custom-control.custom-switch input").should("be.checked");
});
it("State - Enabled | Disabled", function () {
  cy.visit("https://play1.automationcamp.ir/forms.html");
  cy.get("#salary").should("be.disabled");
  cy.get("#salary").invoke("removeAttr", "disabled"); // Manipulate
  cy.get("#salary").should("be.enabled");
});
it("Visibility", function () {
  cy.visit("https://play1.automationcamp.ir/expected_conditions.html");
  cy.get("#max_wait").clear().type(2);
  cy.get("#visibility_target").should("not.be.visible");
  cy.get("#visibility_trigger").click();
  cy.get("#visibility_target").should("be.visible");
});
