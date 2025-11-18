describe('Orange HRM Test', () => {

  const pageUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  const selectorsList = {
    usernameInput: '#app [name="username"]',
    passwordInput: '#app [name="password"]',
    submitButton: '#app [type="submit"]',
    alertBox: '#app div.oxd-alert',
    dashboardHeader: '#app .oxd-topbar-header-breadcrumb-module'
  }
  

  it('Login - Success', () => {
    cy.visit(pageUrl)
    
    cy.get(selectorsList.usernameInput).type("admin");
    cy.get(selectorsList.passwordInput).type("admin123");
    cy.get(selectorsList.submitButton).click()
    
    cy.location('pathname').should("equal", '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardHeader).contains('Dashboard') 
  })

    it('Login - Fail', () => {
    cy.visit(pageUrl)
    
    cy.get(selectorsList.usernameInput).type("test");
    cy.get(selectorsList.passwordInput).type("test123");
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.alertBox);
    })
});


