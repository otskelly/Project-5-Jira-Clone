
//Time estimation
describe('Issue time', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
        cy.visit(url + '/board');
        cy.contains('This is an issue of type: Task.').click();
       
      });
    });

    
    const TimeTracking  =() =>  cy.get('[data-testid="icon:stopwatch"]');
    const EstimateTime= '25'
    const EditEstimateTime= '17'
    const TimeSpent='8'
    const TimeSpentEdited='13'
  
it('Adding time estmation', () => {
    
    cy.get('[placeholder="Number"]').clear().type(EstimateTime);
    cy.contains('25h estimated').should('be.visible');

})
it('Editing time estimation', () => {
    
    cy.get('[placeholder="Number"]').clear().type(EditEstimateTime);
    cy.contains('17h estimated').should('be.visible');
});
it('Remove estimation', () => {
    cy.get('[placeholder="Number"]').clear();
    cy.contains('estimated').should('not.exist');
});

//Time Logging Functionality

it('Adding logging estmation', () => {

 
  cy.get('[data-testid="icon:stopwatch"]').click();
  cy.get('[class="sc-dxgOiQ HrhWu"]').eq(1).click().clear().type(TimeSpent);
  cy.contains('button', 'Done').click();
  cy.contains('8h logged').should('be.visible');
    
});
it('Editing logging estmation', () => {
    
  cy.get('[data-testid="icon:stopwatch"]').click();
  cy.get('[class="sc-dxgOiQ HrhWu"]').eq(1).click().clear().type(TimeSpentEdited);
  cy.contains('button', 'Done').click();
  cy.contains('13h logged').should('be.visible');
    
});

it('Delete logging estmation', () => {
    
  cy.get('[data-testid="icon:stopwatch"]').click();
  cy.get('[class="sc-dxgOiQ HrhWu"]').eq(1).click().clear()
  cy.contains('button', 'Done').click();
  cy.contains('No time logged').should('be.visible');
    
});
})
