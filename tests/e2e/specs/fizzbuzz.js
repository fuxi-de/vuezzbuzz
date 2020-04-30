describe('FizzBuzz Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('p', 'Gib eine Zahl ein und versuch dein Glück')
    cy.get('[type="number"]')
      .clear()
      .type(3)
    cy.get('button').click()
    cy.get('.output').contains('fizz')
  })
})
