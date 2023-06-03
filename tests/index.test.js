const JuegoDeLaVida = require("../src/index");

describe("Pruebas del archivo /.index.js", () => {
  const juego = new JuegoDeLaVida(4, 8);
  describe("createMatriz()", () => {
    const matriz = juego.createMatriz();

    expect(typeof juego.createMatriz).toBe("function");
    expect(typeof matriz).toBe("object");

    it("iniciar con dimensiones correctas", () => {
      const cuadricula = juego.createMatriz();
      expect(cuadricula.length).toBe(4);
      expect(cuadricula[0].length).toBe(8);
    });

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
          expect(matriz[i][j]).toBeLessThanOrEqual(1);
        }
      }
    });
  });

  describe("verify", () => {
    const juego = new JuegoDeLaVida(4, 8);
    juego.initMatriz();
    it("Verificar numero de vecinos", () => {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
          expect(juego.verify(i, j)).toBeGreaterThanOrEqual(0);
          expect(juego.verify(i, j)).toBeLessThanOrEqual(8);
        }
      }
    });
  });

  describe("Pruebas en el metodo poara generar la siguiente generacion", () => {
    test("debe calcular la siguiente generacion de la matriz acontinuación", () => {
      const tabla = new JuegoDeLaVida(3, 3);
      tabla.cuadricula = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
      ];

      tabla.nextGeneration();

      expect(tabla.cuadricula).toEqual([
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ]);
    });
  });
});
