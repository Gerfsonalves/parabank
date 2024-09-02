/// <reference types="cypress" />

describe('automationtesting', () => {

  beforeEach('deve visitar a página de automação', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  })

  it('Navegação na página', () => {

    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get('input[name="customer.firstName"]').type('Teste')

  })

})