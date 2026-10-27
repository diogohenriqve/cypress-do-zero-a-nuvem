// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-drag-drop';

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

   cy.visit('./src/index.html')
    
    cy.get('[name="firstName"]').type('Diogo');
    cy.get('[name="lastName"]').type('Jesus');
    cy.get(':nth-child(2) > :nth-child(1) > [name="email"]').type('diogo@test.com')
    cy.get('[name="open-text-area"]').type('Muito bom o serviço prestado, recomendo para todos. Obrigado!');

    cy.contains('Enviar').click()
})