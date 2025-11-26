Cypress UI Automation – SauceDemo

This repository contains a complete UI Automation Testing project using Cypress, designed to demonstrate end-to-end web testing skills for Junior QA/QA Automation roles.

The project includes login automation, UI element validation, basic workflows, and CI/CD execution through GitHub Actions.


---

🚀 Project Overview

This project automates core user flows on SauceDemo, including:

Login functionality

Adding items to the cart

Validating successful navigation to Inventory page

UI element interactions

Running automated tests in CI/CD (GitHub Actions)


The goal is to showcase practical hands-on experience in UI test automation, commonly used in modern QA workflows.


---

📁 Project Structure

Cypress-UI-Automation/
 ├── cypress/
 │     ├── e2e/
 │     │     ├── login.cy.js
 │     │     └── add_to_cart.cy.js
 │     ├── fixtures/
 │     │     └── user.json
 │     ├── support/
 │           ├── commands.js
 │           └── e2e.js
 ├── .github/
 │     └── workflows/
 │           └── ci.yml
 ├── cypress.config.js
 ├── package.json
 └── README.md


---

🧪 Test Scenarios

🔹 1. Login Test

Validates that the user can log in using valid credentials.

describe('Login Test', () => {
  it('User should login successfully', () => {
    cy.visit('/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory');
  });
});


---

🔹 2. Add to Cart Test

Automates adding an item to the shopping cart.

describe('Add To Cart', () => {
  it('should add item to cart', () => {
    cy.visit('/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.contains('Add to cart').first().click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });
});


---

⚙️ Configuration (cypress.config.js)

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {},
  },
});


---

📦 Installation & Running Tests

Install dependencies:

npm install

Run Cypress in UI Mode:

npx cypress open

Run tests in headless mode:

npx cypress run


---

🔄 CI/CD – GitHub Actions

Every push to the main branch automatically runs Cypress tests using GitHub Actions.

Workflow file is located at:

.github/workflows/ci.yml

CI Workflow Content:

name: Cypress Tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Run Cypress Tests
        run: npx cypress run

✔ تست‌ها به صورت خودکار در GitHub اجرا می‌شوند
✔ نتایج در تب Actions قابل مشاهده است


---

🛠 Technologies Used

Area	Tools

UI Automation	Cypress
CI/CD	GitHub Actions
Language	JavaScript
Version Control	Git + GitHub



---

👩‍💻 About This Project

This repository is part of a professional QA portfolio, showcasing:

✔ UI Automation
✔ Test design
✔ Workflow validation
✔ CI/CD execution
✔ Modern QA skills for junior-level roles
