/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {

  let computerchoice=['Rock','Paper','Scissors'];

  let num = Math.floor(Math.random()*computerchoice.length);

  return computerchoice[num];

}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  

  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score

  let score = 0;

  if (computerChoice=='Scissors' && playerChoice=='Scissors'){score=0;}
  else if (computerChoice=='Scissors' && playerChoice=='Rock'){score=1;}
  else if (computerChoice=='Scissors' && playerChoice=='Paper'){score=-1;}
  else if (computerChoice=='Rock' && playerChoice=='Rock'){score=0;}
  else if (computerChoice=='Rock' && playerChoice=='Paper'){score=1;}
  else if (computerChoice=='Rock' && playerChoice=='Scissors'){score=-1;}
  else if (computerChoice=='Paper' && playerChoice=='Paper'){score=0;}
  else if (computerChoice=='Paper' && playerChoice=='Rock'){score=-1;}
  else if (computerChoice=='Paper' && playerChoice=='Scissors'){score=-1}


  return score;


  
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  const resultdiv = document.getElementById('result');
  const handsdiv = document.getElementById('hands');
  const playerscore = document.getElementById('player-score');

  if (score==-1){resultdiv.innerText='You Lose!';}
  else if (score==0){resultdiv.innerText='It is a Draw';}
  else{resultdiv.innerText='You Win!';}
  
  hands.innerText = `${computerChoice} vs ${playerChoice}`;
  playerscore.innerText = `score: ${score}`;
  
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

  let computerchoice = getComputerChoice();
  console.log(computerchoice);
  let score = getResult(playerChoice,computerchoice);

  showResult(score,playerChoice,computerchoice);
  
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const listofitems=document.querySelectorAll('.rpsButton');
  

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  listofitems.forEach(item => {
    item.onclick = () => {
      onClickRPS(item.value);
    }
  })

 

  // Add a click listener to the end game button that runs the endGame() function on click
  let clearbtn = document.getElementById('endGameButton');


  clearbtn.onclick= () => {
    
    endGame()
    
  }
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {

   const resultdiv = document.getElementById('result');
    const handsdiv = document.getElementById('hands');
  const playerscore = document.getElementById('player-score');
  
  
    resultdiv.innerText='';
    handsdiv.innerText='';
  playerscore.innerText='';
  
  
  
}

playGame()