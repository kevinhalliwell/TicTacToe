// create tic tac toe object
class TicTacToe{
    constructor(){
        this.gameFinished = false
        this.playerOne = []
        this.playerTwo = []
        this.playerOneTurn = false
        this.playerTwoTurn = false
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

    // helper function to check the win
    checkWin(player){
        let win = false
         let winningStates = [
            // winning conditions contained in the rows
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
        
            // winning conditions contained in the columns
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
        
            // winning condition contained in the diagonal
            ['0', '4', '8'],
            ['2', '4', '6']
        ]
        let res = winningStates.filter(p => p.filter(s => {
            return player.indexOf(s) > -1;
          }).length == 3);
          if (res.length > 0){
              win = true
              return win
          }
    }

    // main logic function.
    // check score, player turn, win or lose, update status
    move(){
        document.addEventListener('click', event => {
            let target = event.target
            let cell = target.classList.contains('box')
            let selected = target.classList.contains('selected')

            if (cell && !selected) {
                const playerSelection = target.dataset.value
                // check to see which player is up, enter the statement and change player
                if (this.playerOneTurn === true && this.playerTwoTurn === false) {
                    this.playerOneTurn = false
                    this.playerTwoTurn = true
                    // update class to include x allows for X placement
                    target.classList.add('x')
                    // update player array for comparison to winning array
                    this.playerOne.push(playerSelection)
                } else if (this.playerTwoTurn === true && this.playerOneTurn === false) {
                    this.playerTwoTurn = false
                    this.playerOneTurn = true
                    // update class to include o allows for O placement
                    target.classList.add('o')
                    // update player array for comparison to winning array
                    this.playerTwo.push(playerSelection)
                }
                
                // add selected to box class that was selected
                target.classList.add('selected')
                    
                // If all cells are selected, then its a draw, print to the footer area
                if (!document.querySelectorAll('.box:not(.selected)').length) {
                    // nee to fix this here too******************************************************************************************
                    document.querySelector('.restart').classList.remove('hidden')
                    document.querySelector('.footer').textContent = 'It\'s A Draw!'
                    document.querySelector('h1').innerText = 'It\'s A Draw!'
                }

                // check to see if a player has won
                if (this.checkWin(this.playerOne) === true) {
                    document.querySelector('.footer').textContent = 'Player 1 WINS!!!'
                    document.querySelector('.restart').classList.remove('hidden')
                    document.querySelector('h1').innerText = 'Player 1 WINS!!!'
                } else if (this.checkWin(this.playerTwo) === true){
                    document.querySelector('.footer').textContent = 'Player 2 WINS!!!'
                    document.querySelector('.restart').classList.remove('hidden')
                    document.querySelector('h1').innerText = 'Player 2 WINS!!!'
                }
            }
        })
    }
}

// create new tic tac toe object
let game = new TicTacToe()
game.gameStartTurn()
game.move()