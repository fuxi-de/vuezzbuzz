describe('FizzBuzz Test', () => {
  it('Visits the app root url and tests the input', () => {
    cy.visit('/')
    cy.get('[data-test=input]').should('have.attr', 'placeholder', 'Gib eine Zahl ein')
    cy.get('[data-test=input]')
      .clear()
      .type(3)
    cy.get('[data-test=submit]').click()
    cy.get('[data-test=success]').contains('fizz')
  })
})
