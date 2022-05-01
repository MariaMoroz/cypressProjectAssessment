// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')

Cypress.Commands.add("login", () => { 
    cy.setCookie('token', '624de6fa54d45034bf6613d1%2FHsYFSLGPhNHUbuD0th5L0XUdM8npTYMozDZfAQnu9DgLUdiOldbYNezoVBPAiCAo');
})
Cypress.Commands.add("createBoard", () => { 
    cy.get('button[aria-label="Create board or Workspace"]').should('be.visible');
    cy.get('button[aria-label="Create board or Workspace"]').click();
    cy.get('button[data-test-id="header-create-board-button"]').click();
    cy.get('input[data-test-id="create-board-title-input"]').type('NewTestBoard');
    cy.get('button[data-test-id="create-board-submit-button"]').click();
    cy.get('h1.board-header-btn-text').should('have.text', 'NewTestBoard');
})

Cypress.Commands.add("deleteBoard", () => { 
    cy.get('li:nth-child(1) div._2G_o1L4qKjQzj9 button').click({ force: true });
    cy.get('button[aria-label="Close board..."]').click();
    cy.get('button[title="Close"]').click();
    cy.get('button[data-test-id="close-board-delete-board-button"]').click();
    cy.get('button[data-test-id="close-board-delete-board-confirm-button"]').click();
    cy.get('a[data-test-id="home-team-boards-tab"]').click();
    cy.get('div._3Omg7YRThEerYp button').should('have.text', 'Create your first board');
})