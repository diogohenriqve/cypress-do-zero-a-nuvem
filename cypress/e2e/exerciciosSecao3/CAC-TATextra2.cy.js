describe('Central de Atendimento ao Cliente TAT', () => {
  it('Exibe mensagem de erro ao submeter o formulário com um e-mail com formatação inválida', () => {
    
    cy.visit('./src/index.html')
    
    cy.get('[name="firstName"]').type('Diogo');
    cy.get('[name="lastName"]').type('Jesus');
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').type('ejajusjs123.com')

    cy.get('[name="open-text-area"]').type('Obrigado pela ajuda.')

    cy.contains('Enviar').click()

    cy.get('.error').should(('be.visible'));
  })
})