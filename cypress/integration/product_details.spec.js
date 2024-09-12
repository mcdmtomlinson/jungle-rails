describe('Product Details', () => {
  it('should visit the homepage', () => {
    cy.visit('/');
  });

  it("should navigate to a product detail page on clicking its image", () => {
    cy.get('[alt="Scented Blade"]').click()
    cy.location('pathname').should('eq', '/products/49');
  });
  
});