$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var lives = 10;
    var soFar = "";
    var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var livesText = document.getElementById("lives-text");
    var soFarText = document.getElementById("soFar-text");
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    winsText.textContent = wins;
    lossesText.textContent = losses;
    livesText.textContent = lives;

    function start() {
        lives = 10;
        soFar = "";
        winsText.textContent = wins;
        livesText.textContent = lives;
        soFarText.textContent = soFar;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess); 
    }

    document.onkeyup = function(event) {        
        var keyPressed = event.key;
            if (keyPressed.toUpperCase() === computerGuess) {
                winsText.textContent = wins++;
                start();
                return;
            } else  {
                lives--;
                livesText.textContent = lives;
                soFar = soFar + keyPressed;
                soFarText.textContent = soFar;
            }  
            
            if (lives==0) { 
                losses++;
                lossesText.textContent = losses;
                start();
            } 
    }  
});


