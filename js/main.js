const gridDivArray = document.querySelectorAll(".grid")
let playerMoves= []
let winner = ''
let turn = "x"


// for loop to look through each box//
 for (let i =0; i < gridDivArray.length; i++){
    gridDivArray[i].addEventListener("click", function(){
        const divIndex = this.id;
        playerMoves[divIndex] = turn; 
        console.log(playerMoves);
        this.innerText = turn   
        turn = (turn === "x") ? "o" : "x"
        checkWinner() //WHY DO WE CALL THE FUNCTION HERE? SOLVED
        // console.log(turn)
        // How do we keep the turns from being able to be switched ? SOLVED

    }, {once: true})

 }
 
 function checkWinner() {

 //compare moves array to solutions
        //solution1
       if (playerMoves[0] === playerMoves[1] && playerMoves[1] === playerMoves[2] && playerMoves !== undefined){   
        winner = playerMoves[0]
        console.log(`${winner} is the winner`);
        alert(`${winner} is the winner`)
       }
        //solution2
        else if (playerMoves[3] === playerMoves[4] && playerMoves[4] === playerMoves[5] && playerMoves !== undefined ){
            winner = playerMoves[3]
            console.log(`${winner} is the winner`);
            alert(`${winner} is the winner`)
        }
        //solution3
        else if (playerMoves[6] === playerMoves[7] && playerMoves[7] === playerMoves[8] && playerMoves !== undefined){
            winner = playerMoves[6]
            console.log(`${winner} is the winner`);
            alert(`${winner} is the winner`)}

        //solution4
        else if (playerMoves[0] === playerMoves[3] && playerMoves[3] === playerMoves[6] && playerMoves !== undefined ){
           winner = playerMoves[0]
           console.log(`${winner} is the winner`);
           alert(`${winner} is the winner`)}

        //solution5
        else if (playerMoves[1] === playerMoves[4] && playerMoves[4] === playerMoves[7] && playerMoves[1]!== undefined) {
            winner = playerMoves[1]
            console.log(`${winner} is the winner`)
            alert(`${winner} is the winner`)
        }

        //solution6
        else if (playerMoves[2] === playerMoves[5] && playerMoves[5] === playerMoves[8] && playerMoves !== undefined){
            winner = playerMoves[2]
            console.log(`${winner} is the winner`)
            alert(`${winner} is the winner`);
            
        }

        //solution7
        else if (playerMoves[0] === playerMoves[4] && playerMoves[4] === playerMoves[8] && playerMoves !== undefined){
            winner = playerMoves[0]
            console.log(`${winner} is the winner`);
            alert(`${winner} is the winner`)
        }
        
        //solution8
        else (playerMoves[2] === playerMoves[4] && playerMoves[4] === playerMoves[6] && playerMoves !== undefined);{
            winner = playerMoves[2]
            console.log(`${winner} is the winner`);
            alert(`${winner} is the winner`)}
    }

    // How do we move the message onto the screen instead of the console.log? SOLVED
    // HOW CAN I CHANGE THE FONT OF THE X'S & O'S? SOLVED
    // HOW DO I TELL WHOSE TURN IT IS ?Can i display this?

 //loop through all 8 solutions to find winner (TURNS OUT WE DONT NEED A LOOP)
//  for (i = 0; i < playerMoves.length; i++){

 
    //winning solutions: [0,1,2], [3,4,5] [6,7,8] [0,3,6] [1,4,7] [2,5,8], [0,4,8] [2,4,6] 

 //button attempts
    // btn = document.querySelector("button")
    // HOW DO I MAKE A RESET BUTTON THAT ACTUALLY WORKS?
    //Can you help me finish setting my buttons?
// const newGameButton = document.querySelector("#new-game-button")
//     newGameButton.addEventListener("click",function()
//     { console.log("New Game")
// }) 
// const resetButton = document.querySelector("#reset-button")
//     resetButton.addEventListener("click",function(){
//         playerMoves = [];
//         winner = '';
//         turn = "x";}
//     )