export const login = (email, password) => {
    cy.get('#user').type(email);
    cy.get('#login').click();
    cy.get('#password').type(password);
    cy.get('#login-submit').click();
}