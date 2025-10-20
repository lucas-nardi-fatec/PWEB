let whichFunction = prompt(`1 - Verificar maior numero\n2 - Numeros em ordem crescente\n3 - Verificar se texto e palindromo\n4 - Verificar se e triangulo\nEscolha qual dos programas a seguir executar`);


const threeNumbersArgs = function(){

    let numbersChosen = [];

    for(var i = 0; i < 3; i++){
        numbersChosen[i] = parseInt(prompt(`Digite o ${i + 1}° numero`));
    }

    numbersChosen.sort();
    return numbersChosen;
}



if(whichFunction == 1){
    let numbersChosen = threeNumbersArgs();
    alert(`O maior numero é o ${numbersChosen[2]}`);
} else if (whichFunction == 2){
    let numbersChosen = threeNumbersArgs();
    alert(`Os numeros em ordem crescente são ${numbersChosen[0]}, ${numbersChosen[1]}, ${numbersChosen[2]}`);
} else if (whichFunction == 3){

    let userSentence = prompt("Digite algo.").toUpperCase();
    userSentence = userSentence.replace(/\s/g, '');

    let whatChecking = 0;
    let isEqual = true;

    while(whatChecking < userSentence.length / 2){

        if(userSentence[whatChecking] != userSentence[userSentence.length - 1 - whatChecking]){
            isEqual = false;
            break;
        }

        whatChecking += 1;
    }

    if(isEqual){
        alert("A palavra ou frase digitada e palindromo!!");
    } else {
        alert("A palavra ou frase digitada nao e palindromo.");
    }


} else if (whichFunction == 4){

    let numbersChosen = threeNumbersArgs();
    if((numbersChosen[0] + numbersChosen[1] <= numbersChosen[2]) ||
       (numbersChosen[0] + numbersChosen[2] <= numbersChosen[1]) ||
       (numbersChosen[1] + numbersChosen[2] <= numbersChosen[0])) {
            alert("Os numeros informados nao formam um triangulo.");
       } else {

            let numberEqualSides = 0;

            for(var i = 0; i < 2; i++){
                for(var j = 0; j < 3; j++){
                    if(i < j && numbersChosen[i] == numbersChosen[j]){
                        numberEqualSides++; 
                    }

                }
            }

            if(numberEqualSides == 0){
                alert("O triangulo e escaleno");
            } else if (numberEqualSides == 1){
                alert("O triangulo e isosceles");
            } else {
                alert("O triangulo e equilatero");
            }
       }
}