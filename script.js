const MAX_GUESSES = 10;
let randomNumber;
let guesses;
let bestScore = Infinity;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    document.getElementById("feedback").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("userGuess").value = "";
    document.getElementById("userGuess").disabled = false;
    document.getElementById("playAgainBtn").style.display = "none";
    document.getElementById("instructions").textContent = Guess a number between 1 and 100. You have ${MAX_GUESSES} tries!;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    guesses++;

    if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = Correct! You guessed it in ${guesses} ${guesses === 1 ? 'try' : 'tries'}.;
        if (guesses < bestScore) {
            bestScore = guesses;
            document.getElementById("feedback").textContent += " New best score!";
        }
        endGame();
    } else if (guesses >= MAX_GUESSES) {
        document.getElementById("feedback").textContent = Out of tries! The correct number was ${randomNumber}.;
        endGame();
    } else {
        document.getElementById("feedback").textContent = userGuess > randomNumber ? "Too high! Try lower." : "Too low! Try higher.";
    }

    document.getElementById("attempts").textContent = Attempts used: ${guesses}/${MAX_GUESSES};
    if (bestScore < Infinity) {
        document.getElementById("bestScore").textContent = Best score: ${bestScore} tries.;
    }
}

function endGame() {
    document.getElementById("userGuess").disabled = true;
    document.getElementById("playAgainBtn").style.display = "inline-block";
}

window.onload = startGame;
