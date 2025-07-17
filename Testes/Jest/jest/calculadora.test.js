const calc = require("./calculadora");

describe("Calculadora", () => {
  test("somar 2 + 2 = 4", () => {
    const minhaSoma = calc.soma(2, 2);

    expect(minhaSoma).toBe(4);
  });

  test("subtrair 5 - 3 = 2", () => {
    const minhaSubtracao = calc.subtracao(5, 3);

    expect(minhaSubtracao).toBe(2);
  });
});
