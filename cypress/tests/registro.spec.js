describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('/signup')

    cy.get('[name="firstName"]').type('Daniel')
    cy.get('[name="lastName"]').type('Moreno')
    cy.get('[name="username"]').type('danielteste')
    cy.get('[name="password"]').type('123456')
    cy.get('[name="confirmPassword"]').type('123456')
    cy.get('[type="submit"]').click()

    cy.url().should('include', '/signin')
  })
})


describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao não preencher os campos obrigatórios', () => {
    cy.visit('/signup')

    cy.get('[type="submit"]').click()
    cy.contains('First Name is required').should('be.visible')
  })
})