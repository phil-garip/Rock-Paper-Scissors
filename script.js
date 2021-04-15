// Dependencies (HTML Elements, Libraries, etc.) =====================

// Starting Data =====================================================
  var wins = 0;
  var losses = 0;
  var ties = 0;
  var choices = ["R", "P", "S"];

// Functions =========================================================
  // get user choice 
    // Prompt the user (please pick R, P or S)
    // store the users choice
   
  // get the computer's choice
    // randomly choose a choice from the list of choices
    // randomly generate an index
    // get the letter from our choice list by the index
    // store the computer choice
    
  //show stats function
    function showStats() {
        alert("Stats:" + wins + ", losses:" + losses + ", ties:" + ties);
    }
  // check for a win
    //TIES
function rockPaperScissors() {

    var userChoice = prompt("Hiieeee :) Rock, Paper Scissors? Enter R, P, or S.").toUpperCase();
    var compChoice = choices[Math.floor(Math.random() * choices.length)];
    
    if (userChoice === compChoice) {
        ties++
        showStats();
        console.log("you TIE");
    } 
    else if ((userChoice === "P" && compChoice === "R") || 
            (userChoice === "R" && compChoice === "S") ||
            (userChoice === "S" && compChoice === "P")) {
        wins++
        showStats();
        console.log("you won");
    } 
    else  {
        losses++
        showStats();
    }
    if(confirm("Play again?")) {
    rockPaperScissors(); //loops back to beginning
    }
};
rockPaperScissors(); //intializes?







    //if user input === computer choice, return tie
    // add a tie
    // log "It's a Tie"
    // show stats
    //WINS
      //if user = P and computer = R, return win for user and store in userWin
      //if user = R and computer = S, return win for user and store in userWin
      //if user = S and computer = P. return win for user and store in userWin
      // add a win
      // log "You won"
      // show stats
    //LOSSES
    //if user = R and computer = S, return loss for user and store in userLoss
    //if user = S and computer = R, return loss for user adn store in userLoss
    //if user = P and computer = S, return loss for user and store in userLoss
    // add a loss
    // log "You lost"
    // show stats
  // show stats
    // logs the value for each stat in an alert
    // ask the user to play again?

// User Interactions =================================================
  // play the game
  // get user choice
  // get the computer choice
  // check for a win

// Initialization ====================================================