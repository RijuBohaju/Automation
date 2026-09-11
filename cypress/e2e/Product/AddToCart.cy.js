describe('Daraz- Add to Cart without log in', () => {
    it('Should not add the product to cart', () => {
        cy.visit('https://www.daraz.com.np/')
        cy.get('input[placeholder*="Search"]') 
        .should('be.visible') 
        .type('laptop') 
        cy.get('a[data-spm-click*="locaid=d_go"]') 
        .should('be.visible') 
        .click() 
        // Clicking the first product image 
        cy.get('img[type="product"]') 
        .first() 
        .should('be.visible') 
        .click() 
        
        cy.contains('span', 'Add to Cart') 
        .should('be.visible') 
        .click() 
        
        cy.get('input[placeholder="Please enter your Phone or Email"]') 
        .should('be.visible') 
        cy.get('input[placeholder="Please enter your password"]') 
        .should('be.visible')
    })
})