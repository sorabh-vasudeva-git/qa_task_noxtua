// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
Cypress.Commands.add("visitCounter", () => {
  cy.visit("/");
});

Cypress.Commands.add("getCounterValue", () => {
  return cy.get("#counter");
});

Cypress.Commands.add("incrementCounter", () => {
  cy.get("#increment-btn").click();
});

Cypress.Commands.add("decrementCounter", () => {
  cy.get("#decrement-btn").click();
});

Cypress.Commands.add("assertCounterValue", (expectedValue) => {
  cy.getCounterValue().should("have.text", expectedValue.toString());
});
