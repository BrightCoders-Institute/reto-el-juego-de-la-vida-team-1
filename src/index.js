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
    const filas = this.filas;
    const columnas = this.columnas;
    const iInicio = Math.max(fila - 1, 0);
    const iFin = Math.min(fila + 1, filas - 1);
    const jInicio = Math.max(columna - 1, 0);
    const jFin = Math.min(columna + 1, columnas - 1);
    let count = 0;

    for (let i = iInicio; i <= iFin; i++) {
      for (let j = jInicio; j <= jFin; j++) {
        if (i === fila && j === columna) continue; // salta la célula actual
        count += this.cuadricula[i][j];
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
