# Test Plan for Positive Counter App

## Overview

This test plan outlines the end-to-end test scenarios for a simple counter app.  
The app displays a positive integer counter that can be incremented and decremented by user clicks.  
The counter should never go below zero.

---

## Test Environment

- Application served locally on `http://localhost:3000` using `http-server`.
- E2E testing using Cypress framework.
- Tests run in CI with GitHub Actions including:
  - Screenshots on failure.
  - Video recordings of test runs.
  - Mochawesome detailed HTML reports.

---

## Test Cases

| Test Case ID | Scenario                            | Steps                                                                                  | Expected Result                             | Notes                              |
|--------------|-----------------------------------|----------------------------------------------------------------------------------------|---------------------------------------------|-----------------------------------|
| TC1          | Initial load                      | Open the app.                                                                          | Counter value should be `0`.                | Verifies default state.            |
| TC2          | Increment once                   | Click the increment button once.                                                      | Counter value updates to `1`.               | Basic increment functionality.    |
| TC3          | Decrement once at zero           | Click the decrement button once when counter is `0`.                                 | Counter remains at `0`, no negative values.| Ensures no negative counts.        |
| TC4          | Multiple increments              | Click increment button 5 times.                                                       | Counter value updates to `5`.               | Tests multiple increments.         |
| TC5          | Increment then decrement         | Increment 3 times, then decrement 2 times.                                           | Counter value updates to `1`.               | Tests combined increment/decrement logic. |
| TC6          | Rapid clicking robustness        | Rapidly click decrement 3 times, increment 5 times, then decrement 10 times.          | Counter value never drops below `0`.        | Stress test for rapid user actions.|
| TC7          | Visual regression and debugging   | Run all tests to generate screenshots and videos on failures, with Mochawesome report.| Visual evidence captured for debugging.     | Supports debugging in CI runs.     |

---

## Notes

- The counter logic now **prevents negative values** — the decrement button at zero will not reduce the count below zero.
- Test suite automatically captures **screenshots** on failures and **videos** of test runs.
- Test results are compiled into detailed **Mochawesome HTML reports** for easy review.
- All artifacts are uploaded as part of the CI pipeline for pull request verification.
- Tests are designed to be clear and maintainable with reusable Cypress custom commands.

---

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install
2.npx http-server -p 3000
