/** @format */

/// <reference types="cypress" />
describe("Signup & Login", () => {
  let randomString = Math.random().toString(36).substring(7);
  let password = Math.random() * 10;
  let email = "auto_" + randomString + "@gmail.com";
  const securityAnswer = "Hello world";

  it("Validate signup", () => {
    cy.visit("http://localhost:3000/#/");
    cy.get(".cdk-overlay-backdrop").click(-50, -50, { force: true });
    cy.get("button").contains("Account").click();
    cy.get("#navbarLoginButton").contains("Login").click();
    cy.get("#newCustomerLink > .primary-link")
      .contains("Not yet a customer?")
      .click({ force: true });
    cy.log(randomString);

    cy.get("#emailControl").type(email);
    cy.get("#passwordControl").type(password);
    cy.get("#repeatPasswordControl").type(password);

    cy.get(".mat-select-placeholder").click();
    cy.get("#mat-option-3 > .mat-option-text").click();
    cy.get("#securityAnswerControl").type(securityAnswer);

    cy.get("#registerButton").click();
    cy.get(".mat-snack-bar-container").contains(
      "Registration completed successfully. You can now log in."
    );
  });
  it("Validate login user in to account", () => {
    cy.get("button").contains("Account").click();
    cy.get("#navbarLoginButton").contains("Login").click();
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#loginButton").click();
  });
});
