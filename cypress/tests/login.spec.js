describe('Login Success', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('/signin')

    cy.get('[name="username"]').type('Heath93')
    cy.get('[name="password"]').type('s3cret')
    cy.get('[type="submit"]').click()
  })
})


describe('Login failed', () => {
  it('Deve exibir mensagem de erro ao usar credenciais inválidas', () => {
    cy.visit('/signin')

    cy.get('[name="username"]').type('daniel')
    cy.get('[name="password"]').type('123456')
    cy.get('[type="submit"]').click()
    cy.get('[role="alert"]')
  })
})