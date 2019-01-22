describe('create a peep', () => {
  it('can create a peep and then delete it', () => {
    cy.visit('http://localhost:3000')
      .wait(5000)
      .get('input')
      .type('Cypress can peep too!')
      .get('form > button')
      .click()
      .get(':nth-child(1) > [data-testid=peep-text]')
      .should('have.text', 'Cypress can peep too!')
      .get('.peeps > :nth-child(1) > :nth-child(4)')
      .click()
      .wait(2000)
      .get(':nth-child(1) > [data-testid=peep-text]')
      .should('not.have.text', 'Cypress can peep too!');
  });
});
