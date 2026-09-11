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
      .type('X valid password')

    cy.contains('button', 'LOGIN')
    .should('be.visible')
    .click()

 cy.get('#myAccountTrigger')
  .should('be.visible')

cy.wait(2000)

cy.get('#q')
  .should('exist')
  .should('be.visible')
  .click()

cy.get('#q')
  .type('toothbrush')
cy.get('a[data-spm-click*="locaid=d_go"]') 
 .should('be.visible') 
 .click() 
    
cy.get('img[type="product"]') 
 .first() 
 .should('be.visible') 
 .click() 
        
cy.contains('span', 'Buy Now') 
 .should('be.visible') 
 .click() 
        
cy.origin('https://checkout.daraz.com.np', () => {
 cy.contains('div', 'Proceed to Pay')
  .should('be.visible')
  .click({ force: true })
 cy.contains('div', 'Cash on Delivery')
  .should('be.visible')
  .click()
cy.contains('button', 'Confirm Order')
  .should('be.visible')
  .click()
cy.contains('div', 'Thank you for your purchase!')
  .should('be.visible')

    })
  })
})