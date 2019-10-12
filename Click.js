var clickButton = document.getElementById("clickButton");
var timerSelect = document.getElementById("timerSelect");
var counterDisplay = document.getElementById("counterDisplay");
var scoreBoard = document.getElementById("scoreBoard");
var gameIsRunning = false;
var counter = 0;
var seconds;
var scoreArr = [];

function startGame() {
    seconds = timerSelect.value;

    if (seconds == "invalid") {
        alert("Please select a valid option");
        return;
    }
    
    if (clickButton.innerHTML == "Start") {
        var timer = setTimeout(score, seconds * 1000);
        clickButton.innerHTML = "Click!";
        timerSelect.disabled = true;
        gameIsRunning = true;
    }
}

function clickGame() {
    counter++;
    counterDisplay.innerHTML = "Counter: " + counter;
}

clickButton.addEventListener("click", function() {
    if (gameIsRunning) {
        clickGame();
    } else {
        startGame();
    }
});

function score() {
    alert(`You clicked ${counter} times in ${seconds} seconds! That is an average of ${counter/seconds} clicks per second.`);
    clickButton.innerHTML = "Start";
    counterDisplay.innerHTML = "";
    scoreArr.push(counter);
    scoreArr.sort();
    for (let i = 0; i < scoreArr.length; i++) {
        scoreBoard.removeChild(scoreBoard.childNodes[i]);
    }
    
    for (let i = 0; i < scoreArr.length; i++) {
        scoreBoard.removeChild(scoreBoard.childNodes[i]);
        var score = document.createElement("li");
        score.innerHTML = scoreArr[i];
        scoreBoard.appendChild(score);
    }
    timerSelect.disabled = false;
    gameIsRunning = false;
    counter = 0;
}

