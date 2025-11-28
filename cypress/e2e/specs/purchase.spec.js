import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import CheckoutPage from "../pages/CheckoutPage";

describe('Fluxo completo de compra', () => {

  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('Deve realizar uma compra completa com sucesso', function() {
    const user = this.users.validUser;

    // Login
    LoginPage.login(user.username, user.password);
    cy.url().should('include', '/inventory.html');

    // Adicionar item ao carrinho
    InventoryPage.addToCart('Sauce Labs Backpack');
    InventoryPage.openCart();

    // Checkout
    CheckoutPage.proceedToCheckout();
    CheckoutPage.fillInformation('Lucas', 'Nascimento', '12345');
    CheckoutPage.finish();

    // Validação final
    cy.contains('Thank you for your order!').should('be.visible');
  });

});
