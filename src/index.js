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

    // for (let i = 0; i < this.filas; i++) {
    //   for (let j = 0; j < this.columnas; j++) {
    //     this.cuadricula[i][j] = Math.random() > 0.5 ? 1 : 0;
    //   }
    // }
  }

  print () {
    for (let i = 0; i < this.filas; i++) {
      let filastr = "";
      for (let j = 0; j < this.columnas; j++) {
        filastr += this.cuadricula[i][j] ? "*" : ".";
      }
      console.log(filastr);
    }
    console.log("");
  }

  nextGeneration () {
    const nuevaCuadricula = this.createMatriz();

    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        const neighbors = this.verify(i, j);
        const currentState = this.cuadricula[i][j];

        if (currentState === 1) {
          nuevaCuadricula[i][j] = (neighbors < 2 || neighbors > 3) ? 0 : 1; // Celula muere o sobrevive
        } else {
          nuevaCuadricula[i][j] = (neighbors === 3) ? 1 : 0; // Celula se reproduce o permanece muerta
        }
      }
    }

    this.cuadricula = nuevaCuadricula;
  }

  // nextGeneration () {
  //   const nuevacuadricula = this.createMatriz();
  //   for (let i = 0; i < this.filas; i++) {
  //     for (let j = 0; j < this.columnas; j++) {
  //       const neighbors = this.verify(i, j);
  //       if (this.cuadricula[i][j] === 1) {
  //         if (neighbors < 2 || neighbors > 3) {
  //           nuevacuadricula[i][j] = 0; // Celula muere por sobre/bajapoblacion
  //         } else {
  //           nuevacuadricula[i][j] = 1; // Celula sobrevive
  //         }
  //       } else {
  //         if (neighbors === 3) {
  //           nuevacuadricula[i][j] = 1; // Celula se reproduce
  //         }
  //       }
  //     }
  //   }
  //   this.cuadricula = nuevacuadricula;
  // }

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
juego.play(5);

module.exports = JuegoDeLaVida;
