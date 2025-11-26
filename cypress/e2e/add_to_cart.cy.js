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
