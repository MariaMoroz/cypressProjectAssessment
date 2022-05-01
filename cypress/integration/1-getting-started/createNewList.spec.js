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
      cy.get(btnAddList).click();
      cy.get(inputTitleList).type(this.data.listName);
      cy.get(btnAddList2).click();
      // cy.get(list1).click({ force: true });
      // cy.get('div.list-header h2').each(($el, index, $list) => {
      //   if($el.text()=== this.data.listName){
      //     cy.wrap($el).click({ force: true }).drag('div.js-list:nth-child(3) div.list');
      //   }
      // })
      // cy.get('div.js-list:nth-child(4)').drag('div.js-list:nth-child(3)')
      // cy.get('div.js-list:nth-child(4)').drag('div.js-list:nth-child(3)', {
      //   source: { x: 100, y: 100 }, // applies to the element being dragged
      //   target: { position: 'left' }, // applies to the drop target
      //   force: true, // applied to both the source and target element
      // })
      // cy.get('div.js-list:nth-child(4)').drag('#board > :nth-child(3)').then((success) => {
      //   assert.isTrue(success)
      // })
      const dataTransfer = new DataTransfer();
      
      cy.get('div.js-list:nth-child(4)').trigger('dragstart', {
        dataTransfer
      });

      cy.get('#board > :nth-child(3)').trigger('drop', {
        dataTransfer
      });
      
    //   cy.reload();
    //   cy.get('._3YQVlgFHhNubo1').should('have.text', this.data.boardName);
    //   cy.deleteBoard();
    });
  });


