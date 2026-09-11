
describe('Daraz Search - Valid Search', () => {

  it('should search for a valid product and display search results', () => {
    cy.visit('https://www.daraz.com.np/')
    cy.get('input[placeholder*="Search"]')
      .should('be.visible')
      .type('@#')
    cy.get('a[data-spm-click*="locaid=d_go"]')
      .should('be.visible')
      .click()
    cy.get('body')
      .should('contain.text', 'No Result')

  })

})

