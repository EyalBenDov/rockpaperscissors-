

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

// Get the choice of human player
function getHumanChoice() {
    let entered = false;
    while (!entered) {
        let response = prompt("Enter rock paper or scissors");
        response = (response == null) ? "" : response.toLowerCase()
        if (response == "rock" || response == "paper" || response == "scissors") {
            entered = true;
            return response;
        }
        if (response == "rock paper or scissors") {
            alert("why?");
        }
    }
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

// get and print out wether player or lost, and incremet computerScore/humanScore accordingly
function playRound(humanChoice, computerChoice) {
    let result = winner_dict[humanChoice][computerChoice]
    if (result == true) {
        humanScore++;
        alert("You won! " + humanChoice + " beats " + computerChoice + "!")
    }
    else if (result == false) {
        computerScore++;
        alert("You Lost! " + computerChoice + " beats " + humanChoice + "!")
    }
    else {
        alert("It was a draw! " + humanChoice + " is the same as " + computerChoice + "!")
    }
}

let total_rounds = 5;

for (let i = 0; i < total_rounds; i++) playRound(getHumanChoice(), getComputerChoice());

alert("Final results: \n    You won " + humanScore + " times \n    Computer won: " + computerScore + " times \n    and there were " + (5-computerScore-humanScore) + " draws");