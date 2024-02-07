 //create a object to keep track of win/losses
  // const score = {
  //   wins : 0,
  //   losses : 0,
  //   ties : 0
  // };

  // getting the value of localStorage
  
  // const msg = localStorage.getItem('Score');

  let score = JSON.parse( localStorage.getItem('Score')) || {
    wins : 0,
    losses : 0,
    ties : 0
  };

// if score is null give it default value
// if(score === null){
//   score = {
//     wins : 0,
//     losses : 0,
//     ties : 0
//   };
// }
updateScoreElemet();

let isAutoPlaying = false;
let intervalId;

function autoplay(){
  if(!isAutoPlaying){
    //using arrow function
    intervalId = setInterval(() => {
      playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying = true;
  }
  else{
    clearInterval(intervalId) // to stop the interval
    isAutoPlaying = false;
  }
}
 

// adding event listener

document.querySelector('.js-rock-button').
addEventListener('click',()=>{
  playGame('Rock');
});

document.querySelector('.js-paper-button').
addEventListener('click',()=>{
  playGame('Paper');
});

document.querySelector('.js-scissor-button').
addEventListener('click',()=>{
  playGame('Scissor');
});

document.querySelector('.js-reset-score-button').addEventListener('click',() => {
  score.wins =0;
  score.losses =0;
  score.ties =0 ;
  // when we reset score it will remove the old score from local storage
  localStorage.removeItem('Score');
  updateScoreElemet();
});

document.querySelector('.js-auto-play-button').addEventListener('click',() => {
  autoplay();
});

// playing game with keyboard with 'keydown event'

document.body.addEventListener('keydown',(event) => {
  if(event.key === 'r'){
    playGame('Rock');
  }
  else if(event.key === 'p'){
    playGame('Paper');
  }
  else if(event.key === 's'){
    playGame('Scissor');
  }
});

function playGame(playerMove){
  const computerMove  =  pickComputerMove(); // storing computer move
  let result ='';

  // comparing computer's move to player's move and updating the result
  if(playerMove === 'Scissor'){
    if(computerMove === 'Rock'){
    result = 'You lose.';
    }
    else if(computerMove === 'Paper'){
    result = 'You won.';
    }
    else if(computerMove === 'Scissor'){
    result = 'Tie.' ;
    }

  }
  else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
    result = 'You won.';
    }else if(computerMove === 'Paper'){
    result = 'Tie.';
    }
    else if(computerMove === 'Scissor'){
    result = 'You lose.' ;
    }

  }
  else if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
    result = 'Tie.';
    }else if(computerMove === 'Paper'){
    result = 'You lose.';
    }
    else if(computerMove === 'Scissor'){
    result = 'You won.' ;
    }

  }       

  // Validating the scores
  if(result === 'You won.'){
  score.wins += 1 ;
  }
  else if(result === 'You lose.'){
  score.losses += 1 ;
  }
  else if(result === 'Tie.'){
  score.ties += 1;
  }

  // setting up local storage ,we can do it by setItem() and it only takes strings

  // convert score object into string and store in localStorage
  localStorage.setItem('Score',JSON.stringify(score));

  updateScoreElemet();
  document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = `You
  <img  src="./images/${playerMove}-emoji.png" alt="" class="move-icon">
  <img  src="./images/${computerMove}-emoji.png" alt="" class="move-icon">
  Computer`;  

}

//update score
function updateScoreElemet(){
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

/* show result
function showResultElement(){
document.querySelector('.js-result')
.innerHTML = result;
}
*/

/* show moves
function showMovesElement(){
document.querySelector('.js-moves')
.innerHTML = `  You
<img  src="./images/${playerMove}-emoji.png" alt="" class="move-icon">
<img  src="./images/${computerMove}-emoji.png" alt="" class="move-icon">
Computer`;
}
*/

// picking computer move
function pickComputerMove(){
const randomNumber = Math.random();
let computerMove ='';      

if(randomNumber >=0 && randomNumber < 1/3){
computerMove = 'Rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove ='Paper';
}
else if (randomNumber >=2/3 && randomNumber < 1){
computerMove ='Scissor';
}
return computerMove;

}