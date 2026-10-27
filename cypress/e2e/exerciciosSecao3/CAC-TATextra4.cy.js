describe('Central de Atendimento ao Cliente TAT', () => {
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
     cy.visit('./src/index.html')
     
    cy.get('[name="firstName"]').type('Diogo');
    cy.get('[name="lastName"]').type('Jesus');
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').type('ejajusjs123@com')
    cy.get('#check > [name="phone"]').check();

    cy.contains('Enviar').click()

    cy.get('.error').should(('be.visible'));

  })
})