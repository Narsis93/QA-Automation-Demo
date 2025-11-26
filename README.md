QA Automation & Manual Testing Project

This repository contains a complete QA project including UI automation, API testing, manual test documentation, SQL validation, and CI/CD integration.
The goal of this project is to demonstrate practical QA skills across multiple testing layers, similar to what is used in real-world software engineering teams.


---

🔍 Project Overview

This project includes:

✔ UI Test Automation using Cypress
✔ API Testing using Postman (Newman)
✔ Manual Testing (Test Cases, Bug Reports, Checklists)
✔ SQL Data Validation
✔ CI/CD Integration using GitHub Actions
✔ Screenshots & test evidence
✔ Documentation aligned with SDLC & Agile QA practices


---

📁 Project Structure

QA-Automation-Demo
 ├── README.md
 ├── ManualTesting/
 │     ├── TestCases.xlsx
 │     ├── BugReports.xlsx
 │     ├── Checklist.xlsx
 │     └── Screenshots/
 ├── API/
 │     ├── Postman_Collection.json
 │     ├── TestResults/
 ├── Automation/
 │     ├── cypress/
 │     ├── package.json
 ├── SQL/
 │     ├── queries.sql
 │     ├── DataValidation.xlsx
 ├── .github/
 │     └── workflows/
 │           └── ci.yml


---

🚀 UI Test Automation (Cypress)

This project includes basic end-to-end UI test scenarios:

Login Test

Add to Cart Test

Checkout Test

Logout Test


Run Cypress locally:

npm install
npx cypress open

Run automation in headless mode:

npx cypress run


---

🔌 API Testing (Postman + Newman)

The Postman_Collection.json contains API test scenarios including:

GET /products

POST /login

PUT /update

DELETE /resource

Authentication & negative testing

Response validation: status codes + JSON schema


Run with Newman:

newman run Postman_Collection.json


---

🧪 Manual Testing Documentation

Included:

TestCases.xlsx (functional + regression)

BugReports.xlsx (severity, priority, steps, expected/actual)

Test Checklist

Screenshots folder


Documentation follows ISTQB structure.


---

🗄 SQL Data Validation

Sample database validations:

User table verification

Order data consistency

Join operations validation

Negative data testing

Backend logic validation



---

🔄 CI/CD Integration (GitHub Actions)

Every push to the main branch automatically triggers:

✔ Cypress UI automation
✔ API Testing (optional – if added)
✔ Build + test + logs in GitHub Actions

Example CI pipeline is included in:

.github/workflows/ci.yml


---

🛠 Tools Used

Category	Tools

UI Automation	Cypress
API Testing	Postman, Newman
Manual Testing	Excel, Screenshots
CI/CD	GitHub Actions
Version Control	Git & GitHub
Other	SQL, VS Code



---

👩‍💻 About Me

This project is part of my QA engineering portfolio and demonstrates practical experience in:

Manual Testing

API Testing

Test Case Design

Bug Reporting

UI Automation

SQL Validation

CI/CD setup


GitHub Profile: github.com/Narsis93


---

✅ Future Improvements

Add full TestPlan and Test Strategy

Expand Cypress automation suite

Add API schema validation

Add reporting dashboards (Allure / Mochawesome)
