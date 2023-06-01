const JuegoDeLaVida = require("../src/index");

describe("Pruebas del archivo /.index.js", () => {
  const juego = new JuegoDeLaVida(4, 8);
  test("probar el método createMatriz()", () => {
    const matriz = juego.createMatriz();

    expect(typeof juego.createMatriz).toBe("function");
    expect(typeof matriz).toBe("object");
  });
});
