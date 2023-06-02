const JuegoDeLaVida = require("../src/index");

describe("Pruebas del archivo /.index.js", () => {
  const juego = new JuegoDeLaVida(4, 8);
  describe("createMatriz()", () => {
    const matriz = juego.createMatriz();

    expect(typeof juego.createMatriz).toBe("function");
    expect(typeof matriz).toBe("object");

    it("iniciar matriz con ceros", () => {
      const juego = new JuegoDeLaVida(2, 2);
      const matriz = juego.createMatriz();

      expect(matriz).toEqual([[0, 0], [0, 0]]);
    });
  });

  describe("initMatriz", () => {
    it("inicar con valores al azar de 0 y 1", () => {
      const juego = new JuegoDeLaVida(4, 8);
      juego.initMatriz();
      const matriz = juego.cuadricula;

      for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          expect(matriz[i][j]).toBeGreaterThanOrEqual(0);
          expect(matriz[i][j]).toBeGreaterThanOrEqual(1);
        }
      }
    });
  });
});
