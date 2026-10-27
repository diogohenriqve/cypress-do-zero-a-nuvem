describe('Exercicios seção 4 - Selecionando opções em campos de seleção suspensa', () => {
  it('Exercicio', () => {
    cy.visit('./src/index.html')
    
    cy.get('select#product').select('YouTube').should('have.value','youtube')
  })

  it('Exercicio 1 - Extra', () => {
    cy.visit('./src/index.html')

    cy.get('select').select('mentoria').should('have.value','mentoria')
  });

  it('Exercicio 2 - Extra', () => {
    cy.visit('./src/index.html')
    
    cy.get('select').select(1).should('have.value','blog')
  });

})