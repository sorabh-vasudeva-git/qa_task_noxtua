# Positive Counter App – E2E Testing

This project is a simple counter application that only displays **positive numbers**.  
It includes **Cypress end-to-end (E2E) tests** and a **GitHub Actions pipeline** to automatically verify functionality.

---

## 📋 Features
- Counter starts at 0 and never goes negative.
- Increment and decrement buttons update the counter accordingly.
- Automated E2E tests using Cypress.
- CI pipeline runs tests on every Pull Request.

---

## 📦 Requirements
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

---

## 🚀 Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/sorabh-vasudeva-git/qa_task_noxtua
   cd qa_task_noxtua
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the app locally**
   ```bash
   npx http-server -p 3000
   ```
   The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Running Tests

### 1. Open Cypress Test Runner (interactive mode)
```bash
npx cypress open
```

### 2. Run Cypress Tests in CLI mode
```bash
npx cypress run
```

Tests are located in:
```
cypress/e2e/
```

---

## 🛠 CI/CD Pipeline
- The repository includes a **GitHub Actions** workflow (`.github/workflows/ci.yml`).
- On each Pull Request, the pipeline:
  1. Installs dependencies
  2. Runs Cypress tests
  3. Fails the PR if any test fails

---

## 📄 Test Plan
A detailed test plan covering **edge cases** is located in:
```
test-plan/positive-counter-app-test-plan.md
```

---

## 📝 License
This project is for assessment purposes only.
