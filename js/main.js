// create tic tac toe object
class TicTacToe{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2

        // create game board, empty = 0, X = 1, O = 2
        this.gameBoard = [
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]

        // variable to check gameover
        this.gameOver = false
    }

}

// function to determine witch player will start the game
function gameStart(){
    let r = ""
    let p1 = false
    let p2 = false
    r = Math.random() >= 0.5 ? "heads" : "tails"
    if (r === "heads"){
        p1 = true;
        return p1
    } else {
        p2 = true;
        return p2
    }
}

gameStart()

// start game

// check score

// check player turn

// check win or lose

// check local storage for record

// enter names of players? could store in local storage

// could make a leader board with names and scores etc.... local storage only