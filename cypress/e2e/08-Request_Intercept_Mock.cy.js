/// <reference types='cypress'/>

it("API Request", () => {
  cy.request("https://restcountries.com/v3.1/name/germany").then(
    ($response) => {
      expect($response.status).to.eq(200);
      expect($response.body[0].capital[0]).eq("Berlin");
    }
  );
});

it("Intercepting", () => {
  cy.intercept("https://global.api.clockify.me/auth/token").as("requestAlias");
  cy.visit("https://app.clockify.me/en/login");
  cy.get("#email").type("mohammad@dataart.com")
  cy.get("#password").type("mytest123")
  cy.get("button[type=submit]").click()
  cy.wait("@requestAlias");
  cy.get("@requestAlias").then((request) => {
    expect(request.response.statusCode).to.equal(200);
    expect(request.response.body).to.haveOwnProperty('email', "mohammad@dataart.com")
    expect(request.response.body).to.haveOwnProperty('token')
    expect(request.response.body).to.haveOwnProperty('refreshToken')
    expect(request.response.body).to.haveOwnProperty('id')
  });
});


it.only("Mocking", () => {
  cy.intercept("https://api.realworld.io/api/tags", {
    tags: ["DataArt", "Cypress"],
  }).as("requestAlias");
  cy.visit("https://angular.realworld.io/");
  cy.wait("@requestAlias");
  cy.get("@requestAlias").then((request) => {
    expect(request.response.statusCode).to.equal(200);
  });
});
