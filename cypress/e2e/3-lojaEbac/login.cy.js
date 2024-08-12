/// <reference types="cypress"/>

beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    describe('funcionalidade login', () => {
         it('deve fazer login com sucesso', () => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('gabrielteste@teste.com.br')
            cy.get('#password').type('teste@123')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, .gabriel.thiegogabriel.thiegogabriel.thiego (não é .gabriel.thiegogabriel.thiegogabriel.thiego? Sair)')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
         })
        
         it('Deve exibir mensagem de erro com usuário invalido', () => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('testeerro@teste.com.br')
            cy.get('#password').type('teste@123')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
         });
         it.only('Deve exibir mensagem de erro com senha invalida', () => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('gabrielteste@teste.com.br')
            cy.get('#password').type('teste@1234')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail gabrielteste@teste.com.br está incorreta. Perdeu a senha?')
         });
    })