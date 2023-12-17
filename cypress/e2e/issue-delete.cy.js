describe('Issue deletion', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
      cy.visit(url + '/board');
     
    });
  });

  it.only('Test case 1: Issue deletion', () => {
    cy.visit('/');
    cy.get('[data-testid="icon:plus"]').trigger('click');
    cy.get('[data-testid="select:type"]').click();
    cy.get('[data-testid="select-option:Bug"]').trigger('click');
    cy.get('input[name="title"]').type('kBug');
    cy.get('.ql-editor').type('kBug is on the loose');
    cy.get('[data-testid="select:userIds"]').click();
    cy.get('[data-testid="select-option:Lord Gaben"]').click();
    cy.get('[data-testid="select:priority"]').click();
    cy.get('[data-testid="select-option:Low"]').click();
    cy.get('button[type="submit"]').click();

    cy.get('[data-testid="modal:issue-create"]').should('not.exist');
    cy.contains('Issue has been successfully created.').should('be.visible');
    cy.reload();

    cy.contains('[data-testid="list-issue"]','kBug').click('');
    cy.get('[data-testid="icon:trash"]').click()
    cy.contains('Delete').click();


  });
});

it('Test case 2: Issue deletion cancellation', () => {
  cy.visit('/');
  cy.contains('Click on an issue to see').click();
  cy.get('[data-testid="modal:issue-details"]').should('be.visible');
  cy.get('[data-testid="icon:trash"]').click()
  cy.get('[data-testid="modal:confirm"]').should ('be.visible');

  cy.contains('Cancel').click();

  cy.get('[data-testid="icon:close"]').eq(0).click();
  cy.reload();
  cy.contains('Click on an issue to see').should('be.visible');



});


