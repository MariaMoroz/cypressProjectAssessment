describe('SIGNUP PAGE', () => {
    before('Open login page', () => {
        cy.visit('https://qa-proshop.herokuapp.com');
        cy.get('a[href="/login"]').click();
    });

    it('Should signup with valid credentials', () => {
        cy.get('h1').should('have.text', 'Sign In');
        cy.get('a[data-cy="registerLink"]').click();
        cy.get('h1').should('have.text', 'Sign Up');
        cy.get('label[for="firstname"]').should('be.visible').and('have.text', 'First Name');
        cy.get('label[for="lastname"]').should('be.visible').and('have.text', 'Last Name');
        cy.get('label[for="username"]').should('be.visible').and('have.text', 'Username');
        cy.get('label[for="email"]').should('be.visible').and('have.text', 'Email Address');
        cy.get('label[for="password"]').should('be.visible').and('have.text', 'Password');
        cy.get('label[for="password2"]').should('be.visible').and('have.text', 'Confirm Password');
        cy.get('#firstname').type('Anna');
        cy.get('#lastname').type('McCullough');
        cy.get('#username').type(`Anna${Date.now()}`);
        cy.get('#email').type(`user${Date.now()}@user.com`);
        cy.get('#password').type('Pa33word!');
        cy.get('#password2').type('Pa33word!');
        cy.get('button.btn-primary').click();
        cy.get('#username').should('be.visible').and('contain', 'Anna');
    })
  })
  