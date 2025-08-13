# **Test Plan – Positive Counter App**

## **1. Introduction**

The purpose of this document is to define the test approach, scope, resources, and schedule for testing the Positive Counter App.  
This application allows users to increment and decrement a counter value, ensuring the counter never goes below zero.

---

## **2. Scope**

### **In Scope**
- Functional testing of counter increment and decrement features.
- Validation of boundary conditions (zero as the minimum value).
- Visual regression checks via CI artifacts.
- End-to-end (E2E) tests executed in multiple environments.

### **Out of Scope**
- Performance testing beyond basic responsiveness to user clicks.
- Mobile responsiveness testing.
- Integration with external services.

---

## **3. Test Objectives**
- Verify that the counter initializes to zero.
- Ensure increments correctly increase the counter value.
- Prevent decrements from reducing the counter below zero.
- Validate system behavior under rapid click sequences.
- Confirm that visual artifacts (screenshots/videos) are generated for debugging.

---

## **4. Test Environment**
- **URL:** `http://localhost:3000` (served via `http-server`)
- **Test Framework:** Cypress
- **Execution:** Local and CI (GitHub Actions)
- **CI Features:**
  - Automatic screenshot capture on failure.
  - Video recording of test execution.
  - Mochawesome HTML reports for results.

---

## **5. Test Deliverables**
- Test scripts and scenarios.
- Execution logs.
- Screenshots and video recordings from CI runs.
- Mochawesome HTML reports.
- CI pipeline artifacts for review in pull requests.

---

## **6. Test Cases**

| **Test Case ID** | **Scenario**                      | **Steps**                                                                                  | **Expected Result**                              | **Notes**                                |
|------------------|-----------------------------------|--------------------------------------------------------------------------------------------|--------------------------------------------------|-------------------------------------------|
| TC1              | Initial Load                      | Launch the app.                                                                            | Counter displays `0`.                           | Verifies default state.                   |
| TC2              | Increment Once                    | Click the increment button once.                                                           | Counter updates to `1`.                         | Basic increment functionality.            |
| TC3              | Decrement at Zero                  | Click decrement button when counter is `0`.                                               | Counter remains at `0`.                         | Ensures no negative counts.               |
| TC4              | Multiple Increments                | Click increment button five times.                                                         | Counter updates to `5`.                         | Validates repeated increments.             |
| TC5              | Increment Then Decrement           | Increment three times, then decrement two times.                                           | Counter updates to `1`.                         | Mixed increment/decrement logic.           |
| TC6              | Rapid Click Stress Test            | Rapidly click decrement three times, increment five times, then decrement ten times.       | Counter never drops below `0`.                  | Tests resilience to rapid user actions.    |
| TC7              | Visual Regression & Debugging      | Execute all tests with CI visual capture enabled.                                          | Screenshots/videos generated on failure.        | Supports debugging in CI runs.             |

---

## **7. Test Execution Schedule**
- **Local Execution:** Prior to pushing code changes.
- **CI Execution:** Automatically triggered on pull requests and merges to main branch.

---

## **8. Entry Criteria**
- Application build is complete and stable.
- All dependencies installed.
- Test environment configured and accessible.

---

## **9. Exit Criteria**
- All planned test cases executed.
- All critical defects resolved or accepted.
- Test artifacts (screenshots, videos, reports) uploaded to CI pipeline.

---

## **10. Risks & Mitigations**
- **Risk:** Flaky test results due to timing issues.  
  **Mitigation:** Use Cypress retries and proper waits.
- **Risk:** Counter logic changes may break existing tests.  
  **Mitigation:** Keep tests modular and update selectors/logic promptly.

---

## **11. How to Run Locally**

\`\`\`bash
# Install dependencies
npm install

# Serve application locally
npx http-server -p 3000

# Run Cypress tests
npx cypress open
\`\`\`
