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
    this.cuadricula = this.cuadricula.map((fila, i) =>
      fila.map((estado, j) => {
        const vecinos = this.verify(i, j);
        return estado ? (vecinos === 2 || vecinos === 3) ? 1 : 0 : (vecinos === 3) ? 1 : 0;
      })
    );
  }

  verify (fila, columna) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // salta la celula actual
        const newF = fila + i;
        const newC = columna + j;
        if (newF >= 0 && newF < this.filas && newC >= 0 && newC < this.columnas
        ) {
          count += this.cuadricula[newF][newC];
        }
      }
    }
    return count;
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
