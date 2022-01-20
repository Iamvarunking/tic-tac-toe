let turn = "X";
let gameOver  = false;
reset = document.getElementById("reset");



const changeTurn = () => {
    console.log("change turn");
    return turn === "X"?"0":"X";
    
}



const checkWin = () => {
console.log("check win");
let boxtexts = document.getElementsByClassName('boxtext');
let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
wins.forEach(element => {
    if((boxtexts[element[0]].innerText === boxtexts[element[1]].innerText) && (boxtexts[element[2]].innerText === boxtexts[element[1]].innerText) && (boxtexts[element[0]].innerText !== "")){
        document.getElementsByClassName("playerInfo")[0].innerText = `${boxtexts[element[0]].innerText} won`;
        gameOver = true
    }
})
}  



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("playerInfo")[0].innerText = `${turn}'s turn`;
            }
        }
    });
});



reset.addEventListener('click' , ()=> {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=> {
        element.innerText = "";
    })
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("playerInfo")[0].innerText = `${turn}'s turn`;
});