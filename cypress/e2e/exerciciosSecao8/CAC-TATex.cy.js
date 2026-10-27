describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    
    cy.visit('./src/index.html')

    cy.get('a').should('have.attr', 'target', '_blank')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.visit('./src/index.html')

        cy.get('a').invoke('removeAttr', 'target')
        cy.get('a').click()
    });

    it('testa a página da política de privacidade de forma independente', () => {
        cy.visit('./src/privacy.html')
        
        cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible')
    });
})

