describe('Central de Atendimento ao Cliente TAT', () => {
  it('seleciona um arquivo da pasta fixtures', () => {
    
    cy.visit('./src/index.html')
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
 
    cy.get('#file-upload').should(($input) => {
        const listaArq = $input[0].files;

        expect(listaArq[0].name).to.equal('example.json')
        })
    })
})

it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.visit('./src/index.html')
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})

    cy.get('#file-upload').should(($inputDrag) => {
        const listaArq2 = $inputDrag[0].files;

        expect(listaArq2[0].name).to.equal('example.json')
    })
});

it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    
    cy.visit('./src/index.html')
    cy.fixture('example.json').as('minhaFixture')

    cy.get('#file-upload').selectFile('@minhaFixture').as('extra')

    cy.get('@extra').should(($inputAs) => {
        const listaAr3 = $inputAs[0].files;

        expect(listaAr3[0].name).to.equal('example.json')
    })
});