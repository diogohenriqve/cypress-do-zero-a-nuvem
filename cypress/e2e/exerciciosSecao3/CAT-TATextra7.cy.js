describe('Central de Atendimento ao Cliente TAT', () => {
  it('envia o formulário com sucesso usando um comando costumizado', () => {
    
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success > strong').should(('be.visible'));
  
    })
})