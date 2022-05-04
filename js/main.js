// create tic tac toe object
class TicTacToe{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.gameFinished = false
        this.playerOne = 1 // used to fill the array with the player number
        this.playerTwo = 2 // used to fill the array with the player number
        this.totalMoves = 9

        // create game board, empty = 0, X = 1, O = 2
        // maybe create a second array for the box locations?
        // or maybe load this array with box locations?
        this.gameBoard = [0,0,0,0,0,0,0,0,0]
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
    } else if (this.totalMoves === 8) {
        gameFinished = true
    }

}

function cellClickHandler(e){
    e.target.classList.add('X')
    console.log('box1')
    let x = ""
    document.getElementById
}

document.querySelectorAll(".box1").forEach(cell => {
    cell.addEventListener("click", cellClickHandler)
});

// player move
// document.querySelectorAll("#box").forEach(element => element.addEventListener('click', (m) => game.move(m)))

// check score, player turn, win or lose, update status

// check local storage for record on game start or game load

// enter names of players? could store in local storage

// could make a leader board with names and scores etc.... local storage only