/*totalScore = {
  playerScore=0,
  computerScore=0
};*/
let playerScoreDiv= document.getElementById('player-score')
let hands = document.getElementById('hands')
let resultDiv= document.getElementById('result')
let endGameButton= document.getElementById('endGameButton')

function getComputerChoice() {
  let array = ['Rock', 'Paper', 'Scissors']
  let computerChoice= array[Math.floor(Math.random()*3)]
  return computerChoice
}

function getResult(userChoice, computerChoice)
  { let score;
    if(userChoice==computerChoice)
    {
      score=0;
    }
      else if (userChoice=='Rock' && computerChoice=='Scissors')
      {
        score=1
      }
      else if(userChoice=='Paper' && computerChoice=='Rock')
      {
        score=1
      }
      else if(userChoice=='Scissors' && computerChoice=='Paper')
      {
        score=1
      }
      else
      {
        score=-1
      }  
    return score
  }

function showResult(score, userChoice, computerChoice)
  { 
     switch(score)
    { case -1:
      resultDiv.innerText = 'you lost :('
      break;
    
     case 0:
     resultDiv.innerText = 'Draw'
     break;
     
      case 1:
      resultDiv.innerText= 'You Win!'
       break;
    }
    hands.innerText= `🧑:${userChoice}  Vs. 🤖: ${computerChoice} `
    //for cumulative scoring of score.
    playerScoreDiv.innerText = `${Number(playerScoreDiv.innerText) + score}`
}

function onClickRPS(userChoice)
  {
    console.log(userChoice)
    const computerChoice = getComputerChoice()
    console.log(computerChoice)
    const score= getResult(userChoice, computerChoice)
    console.log(score)
    showResult(score, userChoice, computerChoice)
}

function PlayGame()
  {
    let buttons = document.querySelectorAll('.rpsButton')
    buttons.forEach(button => 
     {
       button.onclick= () => onClickRPS(button.value)
      }
     )
   
  endGameButton.onclick = () => endGame()
}
    
function endGame()
  {
        playerScoreDiv.innerText=''
        hands.innerText = ''
        resultDiv.innerText=''
      
  }
PlayGame()