describe("Positive Counter with Custom Commands and Explanations", () => {
  beforeEach(() => {
    cy.visitCounter();
    cy.log("Visited the counter app homepage.");
  });

  it("starts at 0", () => {
    cy.log("Checking that the initial counter value is zero.");
    cy.assertCounterValue(0);
  });

  it("increments counter to 1", () => {
    cy.log("Clicking the increment button once to increase the counter.");
    cy.incrementCounter();
    cy.log("Verifying the counter now shows 1.");
    cy.assertCounterValue(1);
  });

  it("does not decrement below 0", () => {
    cy.log("Attempting to decrement the counter when it is already zero.");
    cy.decrementCounter();
    cy.log("Verifying the counter does not go below 0.");
    cy.assertCounterValue(0);
  });

  it("increments multiple times", () => {
    cy.log("Clicking increment button 5 times to test multiple increments.");
    for (let i = 0; i < 5; i++) {
      cy.incrementCounter();
    }
    cy.log("Verifying the counter shows 5 after 5 increments.");
    cy.assertCounterValue(5);
  });

  it("increments then decrements correctly", () => {
    cy.log("Incrementing 3 times.");
    for (let i = 0; i < 3; i++) {
      cy.incrementCounter();
    }
    cy.log("Decrementing 2 times.");
    for (let i = 0; i < 2; i++) {
      cy.decrementCounter();
    }
    cy.log("Verifying the counter shows 1 after increments and decrements.");
    cy.assertCounterValue(1);
  });

  it("handles rapid clicking without going negative", () => {
    cy.log("Simulating rapid clicks: 3 decrements, 5 increments, then 10 decrements.");
    for (let i = 0; i < 3; i++) {
      cy.decrementCounter();
    }
    for (let i = 0; i < 5; i++) {
      cy.incrementCounter();
    }
    for (let i = 0; i < 10; i++) {
      cy.decrementCounter();
    }
    cy.log("Verifying the counter never goes below zero despite rapid clicking.");
    cy.assertCounterValue(0);
  });
});
