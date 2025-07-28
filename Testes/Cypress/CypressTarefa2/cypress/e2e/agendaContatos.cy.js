///<reference types="cypress" />

import agendaContatos from "./agendaContatos";

describe(`teste de jobs`, () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Teste de adicionar contato", () => {
    agendaContatos.AdicionarContato();
  });

  it("Teste de editar conttao", () => {
    agendaContatos.EditarContato();
  });

  it("Teste de remover contato", () => {
    agendaContatos.RemoverContato();
  });
});
