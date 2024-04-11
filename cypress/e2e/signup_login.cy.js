/** @format */

/// <reference types="cypress" />
describe("Signup & Login", () => {
  let randomString = Math.random().toString(36).substring(7);
  let randomPassword = Math.random() * 10;
  let randomEmail = "auto_" + randomString + "@gmail.com";
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

    cy.get("#emailControl").type(randomEmail);
    cy.get("#passwordControl").type(randomPassword);
    cy.get("#repeatPasswordControl").type(randomPassword);

    cy.get(".mat-select-placeholder").click();
    cy.get("#mat-option-3 > .mat-option-text").click();
    cy.get("#securityAnswerControl").type(securityAnswer);

    cy.get("#registerButton").click();
  });
});
