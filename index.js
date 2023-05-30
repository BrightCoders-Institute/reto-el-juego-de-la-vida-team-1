const rows = 4;
const columns = 8;

class Table {
    constructor(){
        // this.rows = rows;
        // this.columns = columns;
        this.tab = [
            [".",".",".",".",".",".","."],
            [".",".","*","*",".",".","."],
            [".",".","*","*","*",".","."],
            [".",".",".",".",".",".","."],
            [".",".",".",".",".",".","."],
        ];
    }

    generateTable() {
        let arrayColumns = [];
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.columns; j++){
                let randomNumber = Math.round(Math.random());
                let cell = randomNumber === 1 ? "*" : ".";
                arrayColumns.push(cell);
            }
            this.tab.push(arrayColumns);
            arrayColumns = [];
        }
    }
    
    print() {
        this.tab.forEach( (item) => {
            console.log(item.join(""));
        })
    }
}

class Game {
    constructor(){
        // this.rows = rows
        // this.columns = columns

        this.board = [];
    }


    play(){
        let board = new Table();
        // board.generateTable();
        board.print();
    }
}

const game = new Game();
game.play();

