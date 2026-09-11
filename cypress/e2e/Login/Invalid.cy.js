const invalidUsers = [
  {
    email: 'invalid1@gmail.com',
    password: 'WrongPassword123'
  },
  {
    email: 'invalid2@gmail.com',
    password: 'WrongPassword456'
  },
  {
    email: 'invalid3@gmail.com',
    password: 'WrongPassword789'
  }
]

describe('Daraz Login', () => { 
   invalidUsers.forEach((user, index) => {

    it(`should open Daraz login page and should reject invalid credentials - Test ${index + 1}`, () => {
  
    cy.visit('https://www.daraz.com.np/') 
    cy.get('a[data-spm-click*="locaid=login"]')
      .should('exist')
      .click({ force: true })
      // Enter phone/email
    cy.get('input[placeholder="Please enter your Phone or Email"]')
      .should('be.visible')
      .type(user.email)

    // Enter password
    cy.get('input[placeholder="Please enter your password"]')
      .should('be.visible')
      .type(user.password)

    cy.contains('button', 'LOGIN')
    .should('be.visible')
    .click()
    
        // Verify login failed
    cy.contains('Invalid account or password.')
      .should('be.visible')
  })
  })
}) 
