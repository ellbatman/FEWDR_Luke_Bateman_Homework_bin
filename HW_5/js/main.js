// I went a little crazy and made both the human and computer randomly generate
// their hand so I could use a for loop and have the code only run as long as
// they players are still tied
// I know it doesn't exactly meet the homework requirements, but I hope i's
// okay
var computerScore = 0;
var humanScore = 0;
var computerPlay;
var humanPlay;
var round = 0;
var cWin = 0;
var hWin = 0;

//Random computerPlay Generator function
//Stores possible plays in array
//uses built in floor, random, and length functions to generate a random number between 0 & 3
//sets computerPlay equal to corresponding value stored in array
function getComputerPlay() {
 var plays = ['rock', 'paper', 'scissors'];
 computerPlay = plays[Math.floor(Math.random() * plays.length)];
}

function getHumanPlay() {
 var plays = ['rock', 'paper', 'scissors'];
 humanPlay = plays[Math.floor(Math.random() * plays.length)];
}

//function to check which player wins
function play() {
  round += 1;
  console.log("Round: " + round);
  getComputerPlay();
  getHumanPlay();
  console.log('[You] "' + humanPlay + '!" [Computer] "' + computerPlay + '!"');
  if (humanPlay === computerPlay) {
    console.log("We tied :/");
  } else if (humanPlay === 'paper' && computerPlay === 'rock'
  || humanPlay === 'rock' && computerPlay === 'scissors'
  || humanPlay === 'scissors' && computerPlay === 'paper') {
    if (humanScore < 2){
      console.log("You won this time!");
    } else {}
    humanScore += 1;
  } else if (computerPlay === 'paper' && humanPlay === 'rock'
  || computerPlay === 'rock' && humanPlay === 'scissors'
  || computerPlay === 'scissors' && humanPlay === 'paper') {
    console.log("Huzzah, I've won! One step closer to world domination!");
    computerScore += 1;
  } else {
    console.log("How'd you do that dummy!");
  }
  console.log("Computers: " + computerScore + " -- Humans:" + humanScore);
  checkScore();
}

function checkScore() {
  if (humanScore === 0 && computerScore === 0){
    console.log("Hmmm, I must have miscalculated. Again!");
  } else if (humanScore === 1 && computerScore === 0  || computerScore === 1 && humanScore === 0) {
      if (round < 3 ) {
        console.log("Best 2 out of 3?");
      } else {
        console.log("Quickly, before I lose my patience!")
      }
  } else if (humanScore === 1 && computerScore === 1 || computerScore === 1 && humanScore === 1) {
      console.log("Quickly, before I lose my patience!")
  } else if (humanScore === 2 && computerScore === 0 || humanScore === 2 && computerScore === 1) {
    console.log("Nooooooo!!!! What will motherbot say?!?!?! I'll never live this up back on planet 000110001010101");
    hWin = 1;
  } else {
    console.log("Muahahahaha, now that I've destroyed their leader, the planet is ours!!!");
    console.log("... wait, what's that?");
    console.log("You're not their leader?");
    console.log("I do not compute (*^*&TU I &^$%# Do ^%&^ No&&^% Compuuuuuute");
    cWin = 1;
  }
}

while (cWin === 0 && hWin === 0) {
  play();
}



/* Original Code for Random Generator

var computerScore = 0;
var humanScore = 0;
var computer = "";
var human = "";

function randomGenerator (computer) {
  var random = Math.floor(Math.random() * 3) + 1;
  console.log('Random number is ' + random);
  var temp;
  if (random === 1) {
    temp = "rock";
  } else if (random === 2) {
    temp = "paper";
  } else {
    temp = "scissor";
  }
  return temp;
}

function play (humanPlay) {
  var computerPlay = randomGenerator();
  console.log("The computer play is " + computerPlay);
  if (humanPlay === computerPlay) {
    console.log("you tied");
  } else if (humanPlay === 'paper' && computerPlay === 'rock'
  || humanPlay === 'rock' && computerPlay === 'scissor'
  || humanPlay === 'scissor' && computerPlay === 'paper') {
    console.log("You won! Congrats!");
    humanScore += 1;
  } else if (computerPlay === 'paper' && humanPlay === 'rock'
  || computerPlay === 'rock' && humanPlay === 'scissor'
  || computerPlay === 'scissor' && humanPlay === 'paper') {
    console.log("Aww, dang! The Computer won. A few more and they'll take over the world!");
    computerScore += 1;
  } else {
    console.log("How'd you do that dummy!");
  }
}

*/
