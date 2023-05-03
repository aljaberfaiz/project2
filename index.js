const computerChoice = document.getElementById("computer-choice");
const yourChoice = document.getElementById("your-choice");
const resultGame = document.getElementById("result");
let btn = document.querySelectorAll("button");
let user;
let computer;
let result;
btn.forEach((btns) => {
    btns.addEventListener("click" , (e) => {
    if(e.target.id === "rock"){
        user = "✊"
    }
    if(e.target.id === "paper"){
        user = "✋"
    }
    if(e.target.id === "scissors"){
        user = "✂️"
    }
    yourChoice.innerHTML = user;
    
    getRandom();
    getResult();
    })
    
})

function getRandom(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1){
        computer = "✊";
    }
    if(randomNumber === 2){
        computer = "✋";
    }
    if(randomNumber === 3){
        computer = "✂️";
    }

    computerChoice.innerHTML = computer;
}

function getResult(){
    if(computer === user){
        result = "it's a draw"
    }
    if(computer === "✊" && user === "✋"){
        result = "you win"
    }
    if(computer === "✊" && user === "✂️"){
        result = "you lose"
    }
    if(computer === "✋" && user === "✂️"){
        result = "you win"
    }
    if(computer === "✋" && user === "✊"){
        result = "you lose"
    }
    if(computer === "✂️" && user === "✊"){
        result = "you win"
    }
    if(computer === "✂️" && user === "✋"){
        result = "you lose"
    }
    resultGame.innerHTML = result;
    
}

