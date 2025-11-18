import userData from '../fixtures/users/user-Data.json';

describe('Orange HRM Test', () => {

  const pageUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  const selectorsList = {
    usernameInput: '#app [name="username"]',
    passwordInput: '#app [name="password"]',
    submitButton: '#app [type="submit"]',
    alertBox: '#app div.oxd-alert',
    dashboardGrid: '#app .orangehrm-dashboard-grid'
  }

  it('Login - Success', () => {
    cy.visit(pageUrl)
    
    cy.get(selectorsList.usernameInput).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordInput).type(userData.userSuccess.password);
    cy.get(selectorsList.submitButton).click()
    
    cy.location('pathname').should("equal", '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

    it.skip('Login - Fail', () => {
    cy.visit(pageUrl)
    
    cy.get(selectorsList.usernameInput).type(userData.userFail.username);
    cy.get(selectorsList.passwordInput).type(userData.userFail.password);
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.alertBox);
    })
});

