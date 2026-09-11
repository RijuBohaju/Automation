describe('Daraz- Attempt to buy without login', () => {
    it('Should not be able to buy and should display login page', () => {
        cy.visit('https://www.daraz.com.np/')
        cy.get('input[placeholder*="Search"]') 
        .should('be.visible') 
        .type('laptop') 
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
        
        cy.get('input[placeholder="Please enter your Phone or Email"]') 
        .should('be.visible') 
        cy.get('input[placeholder="Please enter your password"]') 
        .should('be.visible')
    })
})