describe('Navigation', () => {
  it('should navigate to a movie page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
 
    cy.get('a').first().click()

    cy.url().should('include', '/movie')

    // The new page should contain an h1 with the "movie details" text
    cy.get('h1').contains('Movie details')
    cy.get('button').contains('Add to Favourites')
  })
})

