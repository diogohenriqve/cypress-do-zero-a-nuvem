describe('Exercicio 4 - Marcando inputs tipo radio', () => {
   it('Exercicio 1', () => {
    
    cy.visit('./src/index.html')

    cy.get('input[type="radio"]').check('feedback').should('have.value','feedback')
   }); 

   it('Exercicio extra', () => {
    
    cy.visit('./src/index.html')

    cy.get('input[type="radio"]').check('ajuda').should('be.checked','Ajuda')
    cy.get('input[type="radio"]').check('elogio').should('be.checked','Elogio')
    cy.get('input[type="radio"]').check('feedback').should('be.checked','Feedback')

   });
});