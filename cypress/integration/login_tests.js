/// <reference types="Cypress" />

context('Aliasing', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })
  
    it('Verify Home Page Search functionalisty', () => {
      // https://on.cypress.io/as
  
      // Alias a DOM element for use later
      // We don't have to traverse to the element
      // later in our code, we reference it with @
  
     
  
      // when we reference the alias, we place an
      // @ in front of its name
      cy.get('#search_query_top').type('shirt');
      cy.get('#searchbox > .btn').click();
      cy.get('.home').click();
    })
  
    
  })
  