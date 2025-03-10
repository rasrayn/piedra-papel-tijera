

let humanScore = 0;
let computerScore = 0;

//funcion para sumar los puntos

function playGame(userChoice){
    const choice = ['piedra', 'papel', 'tijera'];
    const computerChoice = choice[Math.floor(Math.random() * 3)]
    
/*forma mas sencilla de hacer lo de arriba
const choice = ['piedra', 'papel', 'tijera'];
const computerChoice = choice[Math.floor(Math.random() * 3)]
*/
    let result = ""

    if (computerChoice === userChoice) {
        result = `Draw. Both player choice ${userChoice}`;

    }else if (
        userChoice === "piedra" && computerChoice === "tijera" || userChoice === "papel" && computerChoice === "piedra" || userChoice === "tijera" && computerChoice === "papel"
        
    ){
        result = `You Winner!. ${userChoice} win ${computerChoice}`
        humanScore++

    }else {
        result = `You lose!. ${computerChoice} win ${userChoice}`
        computerScore++
    }
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `JUGADOR: ${humanScore} | COMPUTADORA: ${computerScore}`

    if (humanScore == 3 || computerScore == 3) {
        endGame()
    }
}    

function endGame () {
    const finalResult = humanScore == 3 ? 'Enhorabuena, ¡has ganado!' : 'Lo siento, ¡Has perdido!'
    document.getElementById('result').textContent = finalResult;

    document.getElementById('btnTijera').disabled = true;
    document.getElementById('btnPiedra').disabled = true;
    document.getElementById('btnPapel').disabled = true;
}



