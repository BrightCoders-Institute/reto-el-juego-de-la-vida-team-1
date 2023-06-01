class juegoDeLaVida {
    constructor(filas, columnas) {
      this.filas = filas;
      this.columnas = columnas;
      this.cuadricula = this.crearMatriz();
      this.iniciarMatriz();
    }
  
    crearMatriz() {
      const cuadricula = new Array(this.filas);
      for (let i = 0; i < this.filas; i++) {
        cuadricula[i] = new Array(this.columnas).fill(0);
      }
      return cuadricula;
    }
  
    iniciarMatriz() {
      for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
          this.cuadricula[i][j] = Math.random() > 0.5 ? 1 : 0;
        }
      }
    }}