/// <reference types="cypress" />

describe('Parabank', () => {

    beforeEach('Visitar a página e efetuar o cadastro', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');


    })

    it('Efetuar login usando commands', () => {

        cy.login('Maria-Silva', '12345678')
    })

    it('Fazer uma transferência', () => {

        cy.login('Maria-Silva', '12345678')

        //Indo em transações
        cy.get('#leftPanel > ul > :nth-child(5) > a').click()
        //Preenchendo dados obrigatórios e fazendo a transferência
        cy.get('#transactionId').type('14898')
        cy.get('#transactionDate').type('09-02-2024')
        cy.get('#fromDate').type('09-02-2024')
        cy.get('#toDate').type('09-02-2024')
        cy.get('#amount').type('50')
        cy.get('#findByAmount').click()
    });

})