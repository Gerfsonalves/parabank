/// <reference types="cypress" />

describe('Parabank', () => {

  beforeEach('Visitar a página', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  })

  it('Visitar a página e efetuar o cadastro', () => {

    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get('input[name="customer.firstName"]').type('Maria')
    cy.get('input[name="customer.lastName"]').type('Silva')
    cy.get('input[name="customer.address.street"]').type('Rua Três quartos')
    cy.get('input[name="customer.address.city"]').type('São Paulo')
    cy.get('input[name="customer.address.state"]').type('São Paulo')
    cy.get('input[name="customer.address.zipCode"]').type('12345-678')
    cy.get('input[name="customer.phoneNumber"]').type('11 1234 5678')
    cy.get('input[name="customer.ssn"]').type('123-45-6789')
    cy.get('input[name="customer.username"]').type('Maria-Silva')
    cy.get('input[name="customer.password"]').type('12345678')
    cy.get('input[name="repeatedPassword"]').type('12345678')
    cy.get('[colspan="2"] > .button').click()
  })

})