import { getGreeting } from '../support/app.po';

describe('project-manager', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h1').contains("Welcome project-manager")
    // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome project-manager');
  });
});
