describe('Central de Atendimento ao Cliente TAT', () => {
  it('Verifica o título da aplicação', () => {
    
    cy.visit('./src/index.html')

    cy.get('[name="firstName"]').type('Diogo');
    cy.get('[name="lastName"]').type('Jesus');
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').type('diogo@test.com')
    cy.get('[name="open-text-area"]').type('Muito bom o serviço prestado, recomendo para todos. Obrigado!');

    cy.contains('Enviar').click()

    cy.get('.success').should(('be.visible'));

  })
})