// create tic tac toe object
class TicTacToe{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.gameFinished = false
        this.playerOne = []
        this.playerTwo = []
        this.playerOneTurn = false
        this.playerTwoTurn = false
        checkWin: [
            // Rows
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
        
            // Columns
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
        
            // Diagonal
            ['0', '4', '8'],
            ['2', '4', '6']
        ]
    }
    // start game
    // function to determine witch player will start the game
    gameStartTurn(){
        let r = ''
        r = Math.random() >= 0.5 ? 'heads' : 'tails'
        if (r === 'heads'){
            this.playerOneTurn = true
            return this.playerOneTurn
        } else {
            this.playerTwoTurn = true
            return this.playerTwoTurn
        }
    }

    // main logic function. can be refactored and made smaller, more functions etc
    move(){
        document.addEventListener('click', event => {
            let target = event.target
            let cell = target.classList.contains('box')
            let selected = target.classList.contains('selected')
            
            if (cell && !selected) {
                const playerSelection = target.dataset.value
                
                // FIX THESE VARIABLES HERE**********
                if (this.playerOneTurn === true && this.playerTwoTurn === false) {
                    this.playerOneTurn = false
                    this.playerTwoTurn = true
                    target.classList.add('x')
                    this.playerOne.push(playerSelection)
                } else if (this.playerTwoTurn === true && this.playerOneTurn === false) {
                    this.playerTwoTurn = false
                    this.playerOneTurn = true
                    target.classList.add('o')
                    this.playerTwo.push(playerSelection)
                }
            
                target.classList.add('selected')
                    
                // If all cells are selected, then its a draw print to the footer area
                if (!document.querySelectorAll('.box:not(.selected)').length) {
                    // nee to fix this here too******************************************************************************************
                    //document.querySelector('.hidden').classList.add('visible')
                    document.querySelector('.footer').textContent = 'It\'s A Draw!'
                    console.log('Draw')
                }
        
                TicTacToe.checkWin.forEach(checkWin => {
                    let playerOneWin = winningState.every(s => TicTacToe.playerOne.includes(s))
                    let playerTwoWin = winningState.every(s => TicTacToe.playerTwo.includes(s))
            
                    if (playerOneWin || playerTwoWin) {
                        document.querySelectorAll('#box').forEach(cell => cell.classList.add('selected'))
                        // havent sort the css for this yet
                        // document.querySelector('.hidden').classList.add('visible')
                        if (playerOneWin){
                            document.querySelector('.footer').textContent = 'Player 1 WINS!!!'
                        } else {
                            document.querySelector('.footer').textContent = 'Player 2 WINS!!!'
                        }
                    }
                })
            }
        })
    }
}


// // function to return the turn
// function playerTurn(player1, player2) {
//     if (this.player1 === true) {
//         return this.player1
//     } else if (this.player2 === true){
//         return this.player2
//     } else {
//         console.log('error in the player function both players are false')
//     }
// }


// still testing. array push is not working
let game = new TicTacToe("J", "K")
game.gameStartTurn()
game.move()


// player move

// check score, player turn, win or lose, update status

// check local storage for record on game start or game load

// enter names of players? could store in local storage

// could make a leader board with names and scores etc.... local storage only