
const btnCreate = 'button[aria-label="Create board or Workspace"]';
const btnCreateBoard = 'button[data-test-id="header-create-board-button"]';
const inputTitleBoard = 'input[data-test-id="create-board-title-input"]';
const btnSubmit = 'button[data-test-id="create-board-submit-button"]';
const menuBoards = 'a[data-test-id="home-team-boards-tab"]';
const menuBoardsInBoard = '[href="/workspace52660575"] > ._2mVOf7xFr_C22S';
const btnYourBoard = '.board-tile-details-sub-container';


describe('Creating Board', () => {
    
    before(() => {
      cy.fixture('data').as('data');
      cy.login();
      cy.visit('https://trello.com/jsmithtester100/boards');
    });

    it('should create new board', function() {
      cy.createBoard();
      cy.reload();
      cy.get('._1e3OHas5aNG1hj > svg').click();
      cy.get(menuBoardsInBoard).click();
      cy.get(btnYourBoard).click();
      cy.get('#permission-level > .board-header-btn-text').click();
      cy.get('a.js-select[name="public"]').click();
      cy.get('button.js-submit').click();
      // cy.get('._1e3OHas5aNG1hj > svg').click();
      cy.reload();
      cy.get('._3YQVlgFHhNubo1').should('have.text', this.data.boardName);
      cy.deleteBoard();
    });
  });

