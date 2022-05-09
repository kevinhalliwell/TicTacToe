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
        this.totalMoves = 0
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
            return this.playerOneFalse
        } else {
            this.playerTwoTurn = true
            return this.playerTwoTurn
        }
    }

    move(){
        console.log(game.playerOneTurn)
        console.log(game.playerTwoTurn)
        document.addEventListener('click', event => {
            let target = event.target
            let cell = target.classList.contains('box')
            let selected = target.classList.contains('selected')
            console.log('1')
            //console.log(this.totalMoves)
            
            if (cell && !selected) {
                const playerSelection = target.dataset.value
                console.log('2')
                
                // FIX THESE VARIABLES HERE**********
                if (this.player1 === true && this.player2 === false) {
                    player1 = false
                    player2 = true
                    target.classList.add('x')
                    console.log('X')
                    console.log(this.playerOne)
                    console.log(playerSelection)
                    this.playerOne.push(playerSelection)
                } else if (this.player2 === true && this.player1 === false) {
                    player2 = false
                    player1 = true
                    target.classList.add('o')
                    console.log('O')
                    console.log(this.playerTwo)
                    console.log(playerSelection)
                    this.playerTwo.push(playerSelection)
                }
            
                target.classList.add('selected')
                console.log('3')
                    
                // If all cells are selected, then its a draw print to the footer area
                if (!document.querySelectorAll('#box:not(.selected)').length) {
                    document.querySelector('.hidden').classList.add('visible')
                    document.querySelector('.footer').textContent = 'It\'s A Draw!'
                    console.log('Draw')
                }
                console.log('4')
        
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