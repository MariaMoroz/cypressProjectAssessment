describe('Creating Board', () => {
    
    before(() => {
      cy.login();
    });

    it('should create new board', function() {
      cy.createBoard();
      cy.makeBoardPublic();
      cy.deleteBoard();
    });
  });

