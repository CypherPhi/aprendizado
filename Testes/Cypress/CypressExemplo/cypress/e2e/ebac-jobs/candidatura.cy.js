///<reference types="cypress" />

describe(`teste de candidatura`, () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("deve levar o usuario ate a inscriçao", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
  });

  it("deve preencher o formulario de candidatura", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get('.Aplicacao_nomeEmail__bYdHy > [type="text"]').type("Fulano de Tal");
    cy.get('[type="email"]').type("teste@teste.com");
    cy.get('[type="tel"]').type("17 936189959");
    cy.get('.Aplicacao_contato__VFz7a > [type="text"]').type("rua teste, 123");
    cy.get("#linux").check();
    cy.get('select[name="escolaridade"]').select("outros");
  });
});
