const game = () => {
    let pScore = 0
    let cScore = 0

    //Start Game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
            match.classList.remove('fadeOut')
        })
    }
    //Play Game
    const playGame = () =>{
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')

        //Computer Options
        const computerOpts = ['rock', 'paper', 'scissors']

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerGen = Math.floor(Math.random() * 3)
                const computerChoice = computerOpts[computerGen]

                //Compare Hands
                compareHands(this.textContent, computerChoice)

                //Image Update
                playerHand.src = `./assets/${(this.textContent)}.png`
                computerHand.src = `./assets/${computerChoice}.png`
            })
        })
    }
    //Update Score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')

        playerScore = pScore
        computerScore = cScore
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')

        switch(true){
            case playerChoice === computerChoice: winner.textContent = 'Draw'; break;
            case playerChoice === 'rock' && computerChoice === 'paper': winner.textContent = 'Computer Win'; cScore++; break;
            case playerChoice === 'paper' && computerChoice === 'rock': winner.textContent = 'You win!'; pScore++; break;
            case playerChoice === 'scissors' && computerChoice === 'rock': winner.textContent = 'Computer Wins'; cScore++; break;
            case playerChoice === 'rock' && computerChoice === 'scissors': winner.textContent = 'You win!'; pScore++; break;
            case playerChoice === 'paper' && computerChoice === 'scissors': winner.textContent = 'Computer Wins'; cScore++; break;
            case playerChoice === 'scissors' && computerChoice === 'paper': winner.textContent = 'You win!'; pScore++; break;
        }
    }

    startGame()
    playGame()
}
game()