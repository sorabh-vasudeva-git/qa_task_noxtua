export class CounterPage {
  visit() {
    cy.visit("/");
  }

  getCounter() {
    return cy.get("#counter");
  }

  increment() {
    cy.get("#increment-btn").click();
  }

  decrement() {
    cy.get("#decrement-btn").click();
  }
}
