# 🧪 Testes End-to-End – OrangeHRM com Cypress

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E?logo=cypress)
![License](https://img.shields.io/badge/license-MIT-blue)

Este repositório contém testes automatizados utilizando **Cypress** para validar o fluxo de login da plataforma **OrangeHRM Demo**.

Os cenários verificam:

- ✔️ Login com credenciais corretas  
- ❌ Login com credenciais incorretas  

## 📁 Estrutura do Projeto

```
cypress/
  e2e/
    orangehrm.cy.js
cypress.config.js
package.json
README.md
```

## 🔧 Tecnologias Utilizadas

- **Cypress 13+**
- **JavaScript (ES6)**
- **Mocha** + **Chai** (nativo do Cypress)

## 🧩 Código do Teste

### 🔸 Seletores Utilizados

```js
const selectorsList = {
  usernameInput: '#app [name="username"]',
  passwordInput: '#app [name="password"]',
  submitButton: '#app [type="submit"]',
  alertBox: '#app div.oxd-alert',
  dashboardHeader: '#app .oxd-topbar-header-breadcrumb-module'
};
```

## ✔️ 1. Login – Sucesso

```js
it('Login - Success', () => {
  cy.visit(pageUrl)

  cy.get(selectorsList.usernameInput).type("admin");
  cy.get(selectorsList.passwordInput).type("admin123");
  cy.get(selectorsList.submitButton).click()

  cy.location('pathname').should("equal", '/web/index.php/dashboard/index')
  cy.get(selectorsList.dashboardHeader).contains('Dashboard') 
})
```

## ❌ 2. Login – Falha

```js
it('Login - Fail', () => {
  cy.visit(pageUrl)

  cy.get(selectorsList.usernameInput).type("test");
  cy.get(selectorsList.passwordInput).type("test123");
  cy.get(selectorsList.submitButton).click()
  cy.get(selectorsList.alertBox);
})
```

## ▶️ Como Executar

```bash
npm install
npx cypress open
npx cypress run
```