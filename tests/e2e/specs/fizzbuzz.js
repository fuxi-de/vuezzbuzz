describe('FizzBuzz Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('[type=number]').should('have.attr', 'placeholder', 'Gib eine Zahl ein')
    cy.get('[type=number]')
      .clear()
      .type(3)
    cy.get('[data-test=submit]').click()
    cy.get('[data-test=success]').contains('fizz')
  })
})
