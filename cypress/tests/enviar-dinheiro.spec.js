describe('Enviar Dinheiro', () => {

  beforeEach(() => {
    // Pré-condição: usuário logado
    cy.visit('/signin')

    cy.get('[name="username"]').type('Heath93')
    cy.get('[name="password"]').type('s3cret')
    cy.get('[type="submit"]').click()
    cy.url().should('not.include', '/signin')
  })

  describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      cy.contains('New').click()
      cy.get('[data-test="users-list"]').first().click()
      cy.get('[name="amount"]').type('10')
      cy.get('[placeholder="Add a note"]').type('Aguarde uns segundos')
      cy.contains('Pay').click()
    })
  })

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
      cy.contains('New').click()

      cy.get('[data-test="users-list"]').first().click()

      cy.get('[name="amount"]').type('10')
      cy.get('#transaction-create-description-input').type('Teste saldo insuficiente')
      cy.contains('Pay').click()

      cy.contains('Insufficient Funds').should('be.visible')
      // BUG: Atualmente o sistema permite envio com saldo insuficiente. 
    })
  })

})
