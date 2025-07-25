///<reference types="cypress" />

describe(`teste de jobs`, () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("deve renderizar 4 vagas", () => {
    cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 4);
  });

  it("deve filtrar por FullStack", () => {
    cy.get(".FormVagas_campo__E1ppF").type("fullStack");
    cy.get('button[type="submit"]').click();
  });
});
