/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {

 beforeEach(() => {
  cy.visit('/')
 });

  it('Cadastro de campos obrigatórios', () => {
   var email = `everly${Date.now()}@teste.com`
    cy.preencherCadastro('Everly', 'R', email, '11885789855','Teste@123')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Everly12', 'R','123@twat.com', '11885789855','Teste@123')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços ')
  })
})

