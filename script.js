// opción 1
class Table {
    constructor(rows, columns) {
        this.rows = rows,
        this.columns = columns,
        this.cellsRow = [];
        this.grid = [];
    }

    generateTable() {
        for(let i = 0;  i < this.rows; i++) {
            for(let y = 0; y < this.columns; y++) {
                this.cellsRow.push('.');
            }
            this.grid.push(this.cellsRow);
            this.cellsRow = [];
        }
        return this.grid;
    }

    printTable() {}
}

let table = new Table(4, 8);
console.log(table.generateTable());


// --------------------------------
// let row = 4;
// let columns = 8;
// let grid = [];
// let cellsRow = [];

// for(let i = 0;  i < row; i++) {
//     for(let y = 0; y < columns; y++) {
//         cellsRow.push('.');
//     }
//     grid.push(cellsRow);
//     cellsRow = [];
// }
// console.log(grid);


// opción 2
let row = 4;
let columns = 8;
let grid = [];
let cellsRow = '';
let liveDead = '.';

for(let i = 0;  i < row; i++) {
    for(let y = 0; y < columns; y++) {
        liveDead = Math.floor((Math.random() * (2 - 1 + 1)) + 1);
        if(liveDead === 1) {
            liveDead = '*';
        } else {
            liveDead = '.';
        }
        cellsRow += `${liveDead}`;
    }
    grid.push(cellsRow.split(' '));
    cellsRow = '';
}

// imprimir cuadrícula
let cuadricula = '';
for(let i = 0; i < grid.length; i++) {
    cuadricula += `${grid[i].toString()}\n`;
}
console.log(cuadricula);



class Table2 {
    constructor(rows, columns) {
        this.rows = rows,
        this.columns = columns,
        this.cellsRow = [];
        this.grid = [];
        this.cellsRow = '';
        this.liveDead = '.';
        this.cuadricula = '';
    }

    generateTable() {
        for(let i = 0;  i < this.row; i++) {
            for(let y = 0; y < this.columns; y++) {
                this.liveDead = Math.floor((Math.random() * (2 - 1 + 1)) + 1);
                if(this.liveDead === 1) {
                    this.liveDead = '*';
                } else {
                    this.liveDead = '.';
                }
                this.cellsRow += `${this.liveDead}`;
            }
            this.grid.push(this.cellsRow.split(' '));
            this.cellsRow = '';
        }
        this.printTable(this.grid);
    }

    printTable(grid) {
        for(let i = 0; i < grid.length; i++) {
            this.cuadricula += `${grid[i].toString()}\n`;
        }
        return this.cuadricula;
    }
}

let table2 = new Table2(4, 8);
console.log(table2.printTable());



/* 
// Clase para representar la cuadrícula 
class Cuadricula { 
    constructor(filas, columnas) { 
        this.filas = filas; 
        this.columnas = columnas; 
        this.cuadricula = this.generarCuadriculaInicial(); 
    } 
    // Genera una cuadrícula inicial aleatoria 
    generarCuadriculaInicial() { 
        const cuadricula = []; 
        for (let i = 0; i < this.filas; i++) { 
            // i = filas cuadricula[i] = []; 
            for (let j = 0; j < this.columnas; j++) { 
                // j = columnas cuadricula[i][j] = "."; } } return cuadricula; 
            } 
                // Muestra la cuadrícula en la consola mostrarCuadricula() { 
                    for (let i = 0; i < this.filas; i++) { 
                        let fila = ""; 
                        for (let j = 0; j < this.columnas; j++) { 
                            fila += this.cuadricula[i][j] + " "; 
                        } 
                        console.log(fila); } } } const cuadricula = new Cuadricula(4, 8); cuadricula.mostrarCuadricula();
*/


let tab = [
    [".",".",".","."], // 0
    [".","*",".","*"], // 1
    ["*","*",".","."], // 2
];
let newTab = [];
let contVivo = 0;
let contMuerto = 0;

for(let i = 0; i < tab.length; i++) {
    for(let j = 0; j < tab[i].length; j++) {
        // console.log(`(${i},${j})`);
        if(i === 0) {
            if(j === 0) {
                if(tab[i][j] === '.') {
                    
                } else {

                }
                console.log(tab[i][j+1]);
                console.log(tab[i+1][j]);
                console.log(tab[i+1][j+1]);
                // if(tab[i+1][j] === '*'){
                //     contMuerto++;
                // } else if(tab[i+1][j] === '.'){
                //     contVivo++;
                // } else if(j + 1 === '*') {
                //     contMuerto++;
                // } else if(tab[i+1][j+1] === '*') {
                //     contMuerto++;
                // } else if(tab[i+1][j+1] === '.') {
                //     contVivo++;
                // }
            }
            // cuando es la primera fila
            // console.log(i);
            console.log(contMuerto);
            console.log(contVivo);
        }
        // cuando es la última fila
        else if(i === tab.length-1) {
            
            // console.log('hola');
            
        } 
        // cuando son las demás filas
        else {
            
            // console.log('a');
            
        }
    }
}
