const saudacao = require("./saaudacao");

describe("Saudacao", () => {
  test("dizOla deve retornar 'Ola Maria' quando o nome for 'Maria'", () => {
    const resultado = saudacao.dizOla(" Maria");

    expect(resultado).toBe("Ola Maria");
  });
});
