var movesLeft = 8;
var bombNoise = new Audio("bombSound.mp3");
var cashNoise = new Audio("cashSound.mp3");
var awNoise = new Audio("awwSound.mp3");
var beachMusic = new Audio("beachMusic.mp3");
var gameRunning = true;
var treasureChest= Math.ceil(Math.random() * 25)
var bomb = Math.ceil(Math.random() * 25);
while(bomb === treasureChest){
    bomb = Math.ceil(Math.random() * 25);
};

function reset(){
    for(var i = 1; i < 26; i++){
        document.getElementById(i).innerHTML = "?";
    }

    treasureChest = Math.ceil(Math.random() * 25);
    bomb = Math.ceil(Math.random() * 25);
    while(bomb === treasureChest){
        bomb = Math.ceil(Math.random() * 25)
    }
    movesLeft = 8;
    document.getElementById('movesLeft').innerHTML = "Moves Left: " + movesLeft;
    gameRunning = true;
}

function treasure(location){
    if(gameRunning === true){
        if(document.getElementById(location).innerHTML === "?"){
            movesLeft = movesLeft - 1;
        }
        if(location === treasureChest){
            document.getElementById(location).innerHTML = "💰";
            alert("Congrats! You found the treasure!")
            document.getElementById('movesLeft').innerHTML = "You Win!";
            cashNoise.play();
            end();
        }else if(location === bomb){
            document.getElementById(location).innerHTML = "💣";
            document.getElementById('movesLeft').innerHTML = "You Lose!";
            bombNoise.play();
            alert("Aw rats! You hit the bomb. You lose.")
            end();
        }
        else if(movesLeft <= 0){
            alert("You ran out of moves! You lose.");
            document.getElementById('movesLeft').innerHTML = "Moves Left: " +   movesLeft;
            awNoise.play();
            end();
        }
        else{

            document.getElementById(location).innerHTML = "⛱"
            document.getElementById('movesLeft').innerHTML = "Moves Left: " + movesLeft;
        }
    }
}


function end(){
    gameRunning = false;
    for(var i = 1; i < 26; i++){
        if(i === treasureChest){
            document.getElementById(i).innerHTML = "💰";
        }
        else if(i === bomb){
            document.getElementById(i).innerHTML = "💣";
        }
        else{
            document.getElementById(i).innerHTML = "⛱";
        }
    }
}
