export default {
  elementos: {
    nome: () => cy.get('[type="text"]'),
    email: () => cy.get('[type="email"]'),
    telefone: () => cy.get('[type="tel"]'),

    botaoAdicionar: () => cy.get(".adicionar"),
    botaoRemover: () => cy.get('[type="tel"]'),
    botaoAlterar: () => cy.get(":nth-child(2) > .sc-gueYoa > .edit"),
    botaoSalvar: () => cy.get(".alterar"),
    botaoCancelar: () => cy.get(".cancelar"),
  },

  AdicionarContato() {
    this.elementos.nome().type("Lucas Rodrigues");
    this.elementos.email().type("teste@gmail.com");
    this.elementos.telefone().type("17 936189959");
    this.elementos.botaoAdicionar().click();
  },

  RemoverContato() {
    cy.get(
      "#root > div > div > div:nth-child(2) > div.sc-gueYoa.jWEbWB > button.delete"
    ).click();
  },

  EditarContato() {
    cy.get(":nth-child(3) > .sc-gueYoa > .edit").click();
    this.elementos.nome().clear();
    this.elementos.email().clear();
    this.elementos.telefone().clear();
    this.elementos.nome().type("nome novo");
    this.elementos.email().type("novoemail@gmail.com");
    this.elementos.telefone().type("17 999999999");
    this.elementos.botaoSalvar().click();
  },
};
