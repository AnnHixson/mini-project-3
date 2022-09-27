window.alert("Let's play Rock, Paper, Scissors!");

var game = prompt("Enter R, P, or S");
var victory = "You win!";
var defeat = "You lose!";
var tie = "It's a tie!";

var wins = 0;
var losses = 0;
var ties = 0;

function playGame() {
    var move = Math.floor(Math.random() * 100);
    if (move <= 33) {
        cpuChoice = "r"
        alert("I choose Rock");
    } else if (33 < move <= 66) {
        cpuChoice = "p"
        alert("I choose Paper");
    } else if (move > 66) {
        cpuChoice = "s"
        alert("I choose Scissors");
    };
    return;
}

window.alert(playgame());

function winner() {
    if ((game.toLowerCase() === "r" && cpuChoice === "r") ||
    (game.toLowerCase() === "p" && cpuChoice === "p") ||
    (game.toLowerCase() === "s" && cpuChoice === "s")) {
        alert(tie);
        ties++;
    } else if ((game.toLowerCase() === "r" && cpuChoice === "p") || (game.toLowerCase() === "p" && cpuChoice === "s") || (game.toLowerCase() === "s" && cpuChoice === "r")) {
        alert(defeat);
        losses++;
    } else if ((game.toLowerCase() === "r" && cpuChoice === "s") || (game.toLowerCase() === "p" && cpuChoice === "r") || (game.toLowerCase() === "s" && cpuChoice === "p")) {
        alert(victory);
        wins++;
    } else {
        alert("Please enter either 'R', 'P', or 'S'");
    }     
}

alert(winner());
// choice + playGame + comparison


if (window.confirm("Done playing?")) {
    window.open("exit.html", "Thanks for playing!");
}


//   } else {
//     alert(game);
//   }

