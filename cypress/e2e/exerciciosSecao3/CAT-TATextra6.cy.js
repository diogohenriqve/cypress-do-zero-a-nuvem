describe('Central de Atendimento ao Cliente TAT', () => {
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.visit('./src/index.html')
     
    cy.contains('Enviar').click()

    cy.get('.error').should(('be.visible'));
  })
})