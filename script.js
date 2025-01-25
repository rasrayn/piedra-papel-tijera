console.log("hello world")


/*
juego piedra papel tijera:
primero creando una funcion para que la computa elija de forma aleatoria entre piedra papel tijera.
segundo una funcion para que el jugador elija entre las tres opciones y ver quien gana
tercero crear unas puntuaciones entre usuario y computadora
el juego tendra 5 rondas y podra escribirse en mayusculas o minusculas.
*/  
/* 
//Creando el prompt
let humanChoice = prompt("Piedra, Papel o Tijera, 1, 2 y 3: ").toLowerCase();
console.log(humanChoice);

//Creando de forma aleatoria la eleccion de la maquina.

function getComputerChoice() {
    return Math.random()
}

let computerChoice = getComputerChoice();

if (computerChoice <= 0.33) {
    computerChoice= "Tijera"
    console.log("Tijera")
} else if (computerChoice <= 0.66) {
    computerChoice = "Piedra"
    console.log("Piedra")
} else if (computerChoice <= 0.99) {
    computerChoice = "Papel"
    console.log("Papel")
}


// Definicion de quien gana y sistema de puntuacion

let humanScore = 0
let computerScore = 0


if (computerChoice.toLowerCase() == humanChoice) {
    console.log("Draw!")
} else if (computerChoice === "Tijera" && humanChoice === "piedra") {
    ++humanScore
    console.log("Ganaste! Piedra gana a Tijeras.")
} else if (computerChoice === "Piedra" && humanChoice === "papel") {
    ++humanScore
    console.log("Ganaste! Papel gana a Piedra.")
} else if (computerChoice === "Papel" && humanChoice === "tijera") {
    ++humanScore
    console.log("Ganaste! Tijera gana a Papel.")
} else if (computerChoice === "Tijera" && humanChoice === "papel") {
    ++computerScore
    console.log("Has perdido! Tijeras gana a Papel-")
} else if (computerChoice === "Piedra" && humanChoice === "tijera") {
    ++computerScore
    console.log("Has perdido! Piedra gana a Tijera.")
} else if ( computerChoice === "Papel" && humanChoice === "piedra") {
    ++computerScore
    console.log("Has perdido! Papel gana a Piedra.")
}


function playRound(humanChoice, computerChoice) {
    console.log("Usuario: ", humanScore, "Rival: ", computerScore);
}
console.log(playRound(humanChoice, computerChoice)) */

function addHumanScore(){
    humanScore++;
}
function addComputerScore(){
    computerScore++;
}
let humanScore = 0;
let computerScore = 0;


for (let round = 1; round <= 5; round++) {

    let humanChoice = prompt("Piedra, Papel o Tijera, 1, 2 y 3: ").toLowerCase();
        console.log(humanChoice);

    function getComputerChoice() {
        return Math.random()
    }
    let computerChoice = getComputerChoice();

    if (computerChoice <= 0.33) {
        computerChoice= "Tijera"
        console.log("Tijera")
    } else if (computerChoice <= 0.66) {
        computerChoice = "Piedra"
        console.log("Piedra")
    } else if (computerChoice <= 0.99) {
        computerChoice = "Papel"
        console.log("Papel")
    }


    // Definicion de quien gana y sistema de puntuacion


    if (computerChoice.toLowerCase() == humanChoice) {
        console.log("Draw!")
    } else if (computerChoice === "Tijera" && humanChoice === "piedra") {
        addHumanScore();
        console.log("Ganaste! Piedra gana a Tijeras.")
    } else if (computerChoice === "Piedra" && humanChoice === "papel") {
        addHumanScore();
        console.log("Ganaste! Papel gana a Piedra.")
    } else if (computerChoice === "Papel" && humanChoice === "tijera") {
        addHumanScore();
        console.log("Ganaste! Tijera gana a Papel.")
    } else if (computerChoice === "Tijera" && humanChoice === "papel") {
        addComputerScore();
        console.log("Has perdido! Tijeras gana a Papel-")
    } else if (computerChoice === "Piedra" && humanChoice === "tijera") {
        addComputerScore();
        console.log("Has perdido! Piedra gana a Tijera.")
    } else if ( computerChoice === "Papel" && humanChoice === "piedra") {
        addComputerScore();
        console.log("Has perdido! Papel gana a Piedra.")
    }

    console.log(`Usuario: ${humanScore} Rival: ${computerScore}`);
    console.log(`Round: ${round}`);
}

if (humanScore == computerScore) {
console.log("ESTO ES UN EMPATE!!")
} else if (humanScore > computerScore) {
    console.log("ENHORABUENA GANASTE!!!")
} else if (humanScore < computerScore) {
    console.log("TAL VEZ EN OTRO MOMENTO... HAS PERDIDO!")
}

