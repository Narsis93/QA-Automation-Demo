describe('Login Test', () => {
  it('User should login successfully', () => {
    cy.visit('/');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory');
  });
});
