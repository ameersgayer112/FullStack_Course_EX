const Matrix = require('./Matrix')

class TicTacToe extends Matrix {
    constructor() {
        super()
    }
    loadBoard() {
        this.endGame = false
        this.myMatrix = this.generateMatrix(3, 3)
        for (let i = 0; i < this.myMatrix.length; i++) {
            for (let j = 0; j < this.myMatrix[i].length; j++) {
                this.myMatrix[i][j] = "."
            }
        }

    }

    play(rowNum, columnNum, player) {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        if (player === 1) {
            super.alter(rowNum, columnNum, "X")
        } else {
            super.alter(rowNum, columnNum, "O")
        }

        let diagonal1 = []
        let diagonal2 = []

        let xo = player == 1 ? "X" : "O"


        let rowMarix = this.printRow(rowNum)
        let colMatrix = this.printColumn(columnNum)

        let allRow = rowMarix.every(r => r === xo)
        let allCol = colMatrix.every(c => c === xo)

        diagonal1.push(this.matrix[0][0])
        diagonal1.push(this.matrix[1][1])
        diagonal1.push(this.matrix[2][2])

        diagonal2.push(this.matrix[0][3])
        diagonal2.push(this.matrix[1][1])
        diagonal2.push(this.matrix[2][0])

        let allDiagonal1 = diagonal1.every(d => d === xo)
        let allDiagonal2 = diagonal2.every(d => d === xo)

        if (allRow || allCol || allDiagonal1 || allDiagonal2 && this.endGame == false) {
            console.log(`Congratulations ${player}`)
            this.endGame = true

        }
    }
}

let board = new TicTacToe()
board.loadBoard()
board.print()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1board.play(0, 0, 2)

board.print()