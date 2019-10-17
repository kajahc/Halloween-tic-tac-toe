const gridDivArray = document.querySelectorAll(".grid"); //grabbed all the divs and created the board
let playerMoves = []; //Empty array of player moves
let winner = ""; // Empty quotes to insert actual winner
let turn = "x"; // turn always starts with X going first

// for loop to look through boxes 0-8//
for (let i = 0; i < gridDivArray.length; i++) {
  //added event listener to respond to a click in a box/grid
  gridDivArray[i].addEventListener(
    "click",
    function() {
      //indexes player moves
      const divIndex = this.id;
      playerMoves[divIndex] = turn;
      console.log(playerMoves);
      this.innerText = turn;
      //above - making the X and O's  visible
      //below - decides whose turn it is through a ternary operator; if x's turn is false be O, if x's turn is true be x's
      turn = turn === "x" ? "o" : "x";
      checkWinner(); //WHY DO WE CALL THE FUNCTION HERE? SOLVED; we call the function inside the eventlistner so it checks for a winner after each click
      // console.log(turn)
      // How do we keep the turns from being able to be switched ? SOLVED; by firing once
    },
    { once: true }
  );
}
//checkWinner function checks to see if there is a winner by running the code in comparison to the winning solutions
function checkWinner() {
  //compare moves array to winning solutions
  //solution1
  if (
    playerMoves[0] === playerMoves[1] &&
    playerMoves[1] === playerMoves[2] &&
    playerMoves[0] !== undefined
  ) {
    winner = playerMoves[0];
    console.log(`${winner} is the winner`);
    alert(`${winner} is the winner`);
  }
  //solution2
  else if (
    playerMoves[3] === playerMoves[4] &&
    playerMoves[4] === playerMoves[5] &&
    playerMoves[3] !== undefined
  ) {
    winner = playerMoves[3];
    console.log(`${winner} is the winner`);
    alert(`${winner} is the winner`);
  }
  //solution3
  else if (
    playerMoves[6] === playerMoves[7] &&
    playerMoves[7] === playerMoves[8] &&
    playerMoves[6] !== undefined
  ) {
    winner = playerMoves[6];
    console.log(`${winner} is the winner`);
    alert(`${winner} is the winner`);
  }

  //solution4
  else if (
    playerMoves[0] === playerMoves[3] &&
    playerMoves[3] === playerMoves[6] &&
    playerMoves[0] !== undefined
  ) {
    winner = playerMoves[0];
    console.log(`${winner} is the winner`);
    alert(`${winner} is the winner`);
  }

  //solution5
  else if (
    playerMoves[1] === playerMoves[4] &&
    playerMoves[4] === playerMoves[7] &&
    playerMoves[1] !== undefined
  ) {
    winner = playerMoves[1];
    console.log(`${winner} is the winner`);
    alert(`${winner} is the winner`);
  }

  //solution6
  else if (
    playerMoves[2] === playerMoves[5] &&
    playerMoves[5] === playerMoves[8] &&
    playerMoves[2] !== undefined
  ) {
    winner = playerMoves[2];
    console.log(`${winner} is the winner`);
    alert(`${winner} is the winner`);
  }

  //solution7
  else if (
    playerMoves[0] === playerMoves[4] &&
    playerMoves[4] === playerMoves[8] &&
    playerMoves[0] !== undefined
  ) {
    winner = playerMoves[0];
    console.log(`${winner} is the winner`);
    alert(`${winner} is the winner`);
  }

  //solution8
  else if (
    playerMoves[2] === playerMoves[4] &&
    playerMoves[4] === playerMoves[6] &&
    playerMoves[2] !== undefined
  ) {
    winner = playerMoves[2];
    console.log(`${winner} is the winner`);
    alert(`${winner} is the winner`);
  } else {
    return;
  }
}
// How do we move the message onto the screen instead of the console.log? SOLVED; alert set as long as the click doesn't equal undefined
// HOW CAN I CHANGE THE FONT OF THE X'S & O'S? SOLVED; inserted font-family on container

// HOW DO I TELL WHOSE TURN IT IS ?Can i display this? NOT NEEDED

//loop through all 8 solutions to find winner (TURNS OUT WE DONT NEED A LOOP)
//  for (i = 0; i < playerMoves.length; i++){

//winning solutions: [0,1,2], [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8], [0,4,8] [2,4,6]

//button attempts
// btn = document.querySelector("button")
// HOW DO I MAKE A RESET BUTTON THAT ACTUALLY WORKS? SOLVED BELOW(ln 101-106)
//Can you help me finish setting my buttons? SOLVED
const newGameButton = document.querySelector("#new-game-button");
newGameButton.addEventListener("click", function() {
  console.log("New Game");
  for (let i = 0; i < gridDivArray.length; i++) gridDivArray[i].innerText = " ";
});
// const Button = document.querySelector("#reset-button")
//     resetButton.addEventListener("click",function(){
//         playerMoves = [];
//         winner = '';
//         turn = "x";}
