

// Return paper rock or scissors randomly
function getComputerChoice() {
    let random = Math.random();
    if (random < 0.333) {
        return "rock"
    } else if (random < 0.667) {
        return "paper"
    }
    return "scissors" 
}


let humanScore = 0;
let computerScore = 0;

// dictionary of weather player won or lost (winner_dict[human_choice][computerchoice]) true if won false if lost 0 if draw
winner_dict = {
    rock: {
        rock:"draw",
        paper:false,
        scissors:true
    },
    paper: {
        rock:true,
        paper:"draw",
        scissors:false
    },
    scissors: {
        rock:false,
        paper:true,
        scissors:"draw"
    }
}

let humanChoice = "";
let rounds = Number(prompt("How many rounds?"))
let current_round = 0
display = document.querySelector("#result")
for (let button of document.querySelectorAll("#rps button")) {
    console.log("potato")
    button.addEventListener("click", () => {
        if (current_round < rounds) {
            humanChoice = button.textContent
            playRound(getComputerChoice())
            display.textContent = "User: " + humanScore + "    Computer: " + computerScore
        } else {
            if (humanScore > computerScore)
                alert("You win!")
            else if (computerScore > humanScore)
                alert("you lose!")
            else {
                alert("draw!")
            }
        }
    })
}
// get and print out wether player or lost, and incremet computerScore/humanScore accordingly
function playRound(computerChoice) {
    let result = winner_dict[humanChoice][computerChoice]
    current_round++
    if (result == true) {
        humanScore++;
        // return ("You won! " + humanChoice + " beats " + computerChoice + "!")
    }
    else if (result == false) {
        computerScore++;
        // return ("You Lost! " + computerChoice + " beats " + humanChoice + "!")
    }
    else {
        // return ("It was a draw! " + humanChoice + " is the same as " + computerChoice + "!")
    }
}