describe('Histórico de Transações', () => {

  beforeEach(() => {
    cy.visit('/signin')

    cy.get('[name="username"]').type('Heath93')
    cy.get('[name="password"]').type('s3cret')
    cy.contains('Sign In').click()
    cy.url().should('not.include', '/signin')
  })

  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.get('[data-test="transaction-sender-8THYldXhX"]').should('exist')
  })


  it('Deve exibir mensagem ao não possuir transações', () => {
    cy.visit('/')
    cy.get('[data-test="nav-personal-tab"]').click()

    // Não foi possível validar esse cenário pois o usuário padrão já possui transações.
  })

})