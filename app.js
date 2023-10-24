let Btn = document.querySelectorAll(".button-option");
let Result = document.querySelector(".Result");
let NewGame = document.getElementById("NewGame");
let Restart = document.getElementById("Restart");
let Message = document.getElementById("message");
let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
]; 

let xTurn = true;
let count = 0;
 const disableButtons = () => {
    Btn.forEach((element) => (element.disabled = true));
    Result.classList.remove("hide");
 };
const enableButtons = () => {
    Btn.forEach(element => {
        element.innerText = "";
        element.disabled = false;
    });
    Result.classList.add("hide");
};

const winFunction = (letter) => {
    disableButtons();
    if(letter == "X"){
        Message.innerHTML = "X Wins";
    }
    else{
        Message.innerHTML = "O Wins";
    }
};

const drawFunction = () => {
    disableButtons();
    Message.innerHTML = "Draw";
};


NewGame.addEventListener("click",() => {
    count = 0;
    enableButtons();
});

Restart.addEventListener("click",() => {
    count = 0;
    enableButtons();
});

const winChecker = () => {
    for(let i of winningPattern){
        let[element1,element2,element3 ] = [
            Btn[i[0]].innerText,
            Btn[i[1]].innerText,
            Btn[i[2]].innerText,
        ];
        
        if(element1 != "" && element2 != "" & element3 != ""){
            if(element1 == element2 && element2 == element3){
                winFunction(element1);
            }
     }
    }
};

Btn.forEach((element) => {
    element.addEventListener("click",() => {
        if(xTurn) {
            xTurn = false;

            element.innerText = "X";
            element.disabled = true;
        }
        else{
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if(count == 9){
            drawFunction();
        }
        winChecker();
    });
});
window.onload = enableButtons;
