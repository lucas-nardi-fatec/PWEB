VALUES = ["PEDRA", "PAPEL", "TESOURA"];

computerChoice = VALUES[Math.trunc(Math.random() * 3)];

let humanChoice;

while(!VALUES.includes(humanChoice)){
    humanChoice = prompt("Escolha PEDRA, PAPEL ou TESOURA").toUpperCase();
}

if(computerChoice == humanChoice){
    alert(`O computador também escolheu ${computerChoice}. EMPATE!!!!!!!`);
} else {

    if((humanChoice == "PEDRA" && computerChoice == "TESOURA") ||
       (humanChoice == "PAPEL" && computerChoice == "PEDRA") ||
       (humanChoice == "TESOURA" && computerChoice == "PAPEL")){
            alert(`O computador também escolheu ${computerChoice}. VITORIA!!!!!!!!`);

       } else {
            alert(`O computador escolheu ${computerChoice}. DERROTA!!!!!!!!`);
       }

}