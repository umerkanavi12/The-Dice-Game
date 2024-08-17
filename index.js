var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);
window.onload = function(){
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
whowins(randomNumber1, randomNumber2);
}

function whowins(randomNumber1, randomNumber2){
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player one wins";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Player two wins";
    }
    else{
        document.querySelector("h1").innerHTML="oops it's a draw";

    }
}