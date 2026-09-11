describe('Daraz Login', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('should login successfully', () => {
    cy.visit('https://www.daraz.com.np/')
    cy.get('a[data-spm-click*="locaid=login"]')
      .should('exist')
      .click({ force: true })
    cy.get('input[placeholder="Please enter your Phone or Email"]')
      .should('be.visible')
      .type('X valid username')

    cy.get('input[placeholder="Please enter your password"]')
      .should('be.visible')
      .type('X password')

    cy.contains('button', 'LOGIN')
    .should('be.visible')
    .click()
    cy.get('#myAccountTrigger')
      .should('be.visible')
      .and('contain.text', "X's account")
  })
})