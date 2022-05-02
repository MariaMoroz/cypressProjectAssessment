describe('Creating List', () => {
    
    before(() => {
      cy.login();
      cy.createBoard();
    });

    it('should create new list', () => {  
      cy.createNewList();
      cy.dragDropCreatedList();
      cy.deleteList();
    });

    after(() => {
      cy.deleteBoard();
    });
  });


