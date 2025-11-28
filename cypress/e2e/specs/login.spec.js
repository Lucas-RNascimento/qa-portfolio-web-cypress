import LoginPage from "../pages/LoginPage";

describe('Login', () => {

  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('Login válido com usuário padrão', function() {
    const user = this.users.validUser;
    LoginPage.login(user.username, user.password);

    cy.url().should('include', '/inventory.html');
  });

});
