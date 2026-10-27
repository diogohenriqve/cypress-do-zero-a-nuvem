describe('Seção 6: Marcando e desmarcando campos do tipo caixa de seleção', () => {
   
    it('Exercicio', () => {
        cy.visit('./src/index.html')

        cy.get('input[type="checkbox"]').check('email').should('be.checked','email')
        cy.get('input[type="checkbox"]').check('phone').should('be.checked','phone')

        cy.get('input[type="checkbox"]').last().uncheck()
    });

});