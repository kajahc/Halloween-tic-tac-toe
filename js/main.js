const gridDivArray = document.querySelectorAll(".grid")
const playerMoves= []
let turn = "x"

 for (let i =0; i < gridDivArray.length; i++){
    gridDivArray[i].addEventListener("click", function(){
        const divIndex = this.id;
        playerMoves[divIndex] = turn; 
        console.log(playerMoves);
        this.innerText=turn   
        turn = (turn === "x") ? "o" : "x"
        console.log(turn)
        
    })
 }