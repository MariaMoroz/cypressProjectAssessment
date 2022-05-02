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
const data = require('../fixtures/data.json');

const btnCreate = 'button[aria-label="Create board or Workspace"]';
const btnCreateBoard = 'button[data-test-id="header-create-board-button"]';
const inputTitleBoard = 'input[data-test-id="create-board-title-input"]';
const btnSubmit = 'button[data-test-id="create-board-submit-button"]';
const menuBoards = 'a[data-test-id="home-team-boards-tab"]';
const menuBoardsInBoard = '[href="/workspace52660575"] > ._2mVOf7xFr_C22S';
const btnYourBoard = '.board-tile-details-sub-container';
const btnAddList = 'a.js-open-add-list span.placeholder';
const inputTitleList = 'input[name="name"]';
const btnAddList2 = 'input[value="Add list"]';
const btnAddCard = 'open-card-composer js-open-card-composer';
const inputCardField = '"list-card-composer-textarea js-card-title"';
const btnAddCard2 = '"nch-button nch-button--primary mod-list-add-button js-save-edit"';
const list1 = "div.js-list:nth-child(1) div.list"
const btnListActions = '#board > div:nth-child(3) a[aria-label="List actions"]';
const btnArchiveList = 'a.js-close-list';
const arrayOfLists = '#board > div div > textarea'

Cypress.Commands.add("login", () => { 
    cy.setCookie('token', '624de6fa54d45034bf6613d1%2FHsYFSLGPhNHUbuD0th5L0XUdM8npTYMozDZfAQnu9DgLUdiOldbYNezoVBPAiCAo');
    cy.visit('https://trello.com/jsmithtester100/boards');
})
Cypress.Commands.add("createBoard", () => { 
    cy.get('button[aria-label="Create board or Workspace"]').should('be.visible');
    cy.get('button[aria-label="Create board or Workspace"]').click();
    cy.get('button[data-test-id="header-create-board-button"]').click();
    cy.get('input[data-test-id="create-board-title-input"]').type('NewTestBoard');
    cy.get('button[data-test-id="create-board-submit-button"]').click();
    cy.get('h1.board-header-btn-text').should('have.text', data.boardName);
})

Cypress.Commands.add("makeBoardPublic", () => { 
    cy.reload();
    cy.get('._1e3OHas5aNG1hj > svg').click();
    cy.get(menuBoardsInBoard).click();
    cy.get(btnYourBoard).click();
    cy.get('#permission-level > .board-header-btn-text').click();
    cy.get('a.js-select[name="public"]').click();
    cy.get('button.js-submit').click();
})

Cypress.Commands.add("createNewList", () => {
    cy.reload(); 
    cy.get('._1e3OHas5aNG1hj > svg').click();
    cy.get(menuBoardsInBoard).click();
    cy.get(btnYourBoard).click();
    cy.get(btnAddList).click();
    cy.get(inputTitleList).type(data.createdListName);
    cy.get(btnAddList2).click();
});

Cypress.Commands.add("dragDropCreatedList", () => { 
    cy.get("#board > div:nth-child(4) > .list").trigger("mousedown", {
        which: 1
    });
    cy.get("#board > div:nth-child(3) > .list").trigger("mousemove", {force: true});
    cy.get("#board > div:nth-child(3) > .list")
        .trigger("mousemove", {force: true})
        .trigger("mouseup", {force: true});
    cy.get('#board > div:nth-child(3)  div > textarea').should('have.text', data.createdListName);
});

Cypress.Commands.add("deleteList", () => { 
    cy.get(btnListActions).click();
    cy.get(btnArchiveList).click();
    cy.get(arrayOfLists).each(($el, index, $list) => {
        $el.text() != data.createdListName;
        cy.get($el).should('not.have.text', data.createdListName);
    })
});

Cypress.Commands.add("deleteBoard", () => { 
    cy.reload();
    cy.get('li:nth-child(1) div._2G_o1L4qKjQzj9 button').click({ force: true });
    cy.get('button[aria-label="Close board..."]').click();
    cy.get('button[title="Close"]').click();
    cy.get('button[data-test-id="close-board-delete-board-button"]').click();
    cy.get('button[data-test-id="close-board-delete-board-confirm-button"]').click();
    cy.get('a[data-test-id="home-team-boards-tab"]').click();
    cy.get('div._3Omg7YRThEerYp button').should('have.text', 'Create your first board');
});