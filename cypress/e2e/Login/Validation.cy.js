const invalidUsers = [
  {
    email: '123456',
    password: 'Wrong'
  },
  {
    email: 'invalid3gmail.com',
    password: 'WrongPassword789'
  },
  {
    email: 'invalid',
    password: 'WrongPassword789'
  }
]

describe('Daraz Login with invalid credentials', () => { 
   invalidUsers.forEach((user, index) => {

    it(`should display validation messages - Test ${index + 1}`, () => {
  
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
    cy.contains('The Phone may be null or illegal')
      .should('be.visible')
  })
  })
}) 
