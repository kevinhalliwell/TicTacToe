// create tic tac toe object
class TicTacToe{
    constructor(){
        this.player1 = false
        this.player2 = false
        this.gameFinished = false
        this.pl1 = 1
        this.pl2 = 2
        this.totalMoves = 9

        // create game board, empty = 0, X = 1, O = 2
        this.gameBoard = [
            [0,0,0,0,0,0,0,0,0]
        ]
    }
}

// start game
// function to determine witch player will start the game
function gameStart(){
    let r = ""
    r = Math.random() >= 0.5 ? "heads" : "tails"
    if (r === "heads"){
        this.player1 = true
        this.player2 = false
        return this.player1
    } else {
        this.player2 = true
        this.player1 = false
        return this.player2
    }
}

// function to place X or O depending on player
function move(m){
    // check first to see if the game is over
    if (!this.gameFinished) {
        this.totalMoves--
        
    }

}

// player move
document.querySelectorAll("#box").forEach(element => element.addEventListener('click', (m) => game.move(m)))

// check score

// check player turn

// check win or lose

// check local storage for record

// enter names of players? could store in local storage

// could make a leader board with names and scores etc.... local storage only