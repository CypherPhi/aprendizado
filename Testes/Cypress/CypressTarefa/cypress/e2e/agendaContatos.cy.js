///<reference types="cypress" />

import agendaContatos from "./agendaContatos";

describe(`teste de jobs`, () => {
  it("Testes dentro da agenda de contatops", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    //agendaContatos.AdicionarContato();
    //agendaContatos.RemoverContato();
    agendaContatos.EditarContato();
  });
});
