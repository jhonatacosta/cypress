describe('Orange HRM Test', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get('#app [name="username"]').type("admin");
    cy.get('#app [name="password"]').type("admin123");
    cy.get('#app [type="submit"]').click()
    
    cy.location('pathname').should("equal", '/web/index.php/dashboard/index')
    cy.get('#app .oxd-topbar-header-breadcrumb-module').contains('Dashboard') 
  })

    it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get('#app [name="username"]').type("test");
    cy.get('#app [name="password"]').type("test123");
    cy.get('#app button.oxd-button').click()
    cy.get('#app div.oxd-alert');
    })
});


