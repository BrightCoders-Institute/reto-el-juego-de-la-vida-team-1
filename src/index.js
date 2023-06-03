class JuegoDeLaVida {
  constructor (filas, columnas) {
    this.filas = filas;
    this.columnas = columnas;
    this.cuadricula = this.createMatriz();
    this.initMatriz();
  }

  createMatriz () {
    const cuadricula = new Array(this.filas);
    for (let i = 0; i < this.filas; i++) {
      cuadricula[i] = new Array(this.columnas).fill(0);
    }
    return cuadricula;
  }

  initMatriz () {
    this.cuadricula = Array(this.filas)
      .fill()
      .map(() =>
        Array(this.columnas)
          .fill()
          .map(() => (Math.random() > 0.5 ? 1 : 0))
      );
  }

  print () {
    this.cuadricula.forEach((fila) => {
      const filastr = fila.map((elemento) => (elemento ? "*" : ".")).join("");
      console.log(filastr);
    });
    console.log("");
  }

  nextGeneration () {
    const nuevaCuadricula = [];
    for (let i = 0; i < this.cuadricula.length; i++) {
      nuevaCuadricula[i] = [];
      for (let j = 0; j < this.cuadricula[i].length; j++) {
        const vecinos = this.verify(i, j);
        nuevaCuadricula[i][j] = this.cuadricula[i][j] ? (vecinos === 2 || vecinos === 3) ? 1 : 0 : (vecinos === 3) ? 1 : 0;
      }
    }

    this.cuadricula = nuevaCuadricula;
  }

  verify (fila, columna) {
    let count = 0;
    const filas = this.filas;
    const columnas = this.columnas;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (this.isCurrentCell(i, j)) continue; // salta la célula actual
        const newF = fila + i;
        const newC = columna + j;

        if (this.isValidCell(newF, newC, filas, columnas)) {
          count += this.cuadricula[newF][newC];
        }
      }
    }

    return count;
  }

  isCurrentCell (i, j) {
    return i === 0 && j === 0;
  }

  isValidCell (fila, columna, filas, columnas) {
    return fila >= 0 && fila < filas && columna >= 0 && columna < columnas;
  }

  play (iterations) {
    for (let i = 0; i < iterations; i++) {
      console.log(`Generación ${i + 1}:`);
      this.print();
      this.nextGeneration();
    }
  }
};

const juego = new JuegoDeLaVida(4, 8);
juego.play(2);

module.exports = JuegoDeLaVida;
