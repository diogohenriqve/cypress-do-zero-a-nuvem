describe('Central de Atendimento ao Cliente TAT', () => {
  it('preenche e limpa os campos nome, sobrenome, e-mail e telefone', () => {
    cy.visit('./src/index.html')
     
    cy.get('[name="firstName"]').type('Diogo').should('have.value','Diogo');
    cy.get('[name="lastName"]').type('Jesus').should('have.value','Jesus');
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').type('ejajusjs123@com').should('have.value','ejajusjs123@com')
    cy.get(':nth-child(2) > [name="phone"]').type('939390022').should('have.value','939390022');

    cy.get('[name="firstName"]').clear().should('have.value','');
    cy.get('[name="lastName"]').clear().should('have.value','');
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').clear().should('have.value','')
    cy.get(':nth-child(2) > [name="phone"]').clear().should('have.value','');

  })
})