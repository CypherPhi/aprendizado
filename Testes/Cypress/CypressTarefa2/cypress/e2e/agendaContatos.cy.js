///<reference types="cypress" />

import agendaContatos from "./agendaContatos";

describe(`teste de jobs`, () => {
  it("Testes dentro de adicionar contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    agendaContatos.AdicionarContato();
  });

  it("teste de editar conttao", () => {
    agendaContatos.EditarContato();
  });

  it("teste de remover contato", () => {
    agendaContatos.RemoverContato();
  });
});
