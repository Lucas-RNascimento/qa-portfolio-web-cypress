class InventoryPage {
  addToCart(productName) {
    cy.contains('.inventory_item', productName)
      .find('button')
      .click();
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default new InventoryPage();
