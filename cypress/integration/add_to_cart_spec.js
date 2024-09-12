describe('Add To Cart', () => {
  it('should visit the homepage', () => {
    cy.visit('/');
  });

  it("should add the first product to cart", () => {
    cy
     .get(".products article")
     .first()
     .find("button:contains('Add')")
     .click();

    cy
     .get("li.nav-item.end-0")
     .should('contain', 'My Cart (1)');
  });
  
});