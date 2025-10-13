var nome, n1, n2, n3, n4, mediaArit;

nome = prompt("Insira o nome do aluno");
n1 = parseFloat(prompt("Insira a primeira nota do aluno"));
n2 = parseFloat(prompt("Insira a segunda nota do aluno"));
n3 = parseFloat(prompt("Insira a terceira nota do aluno"));
n4 = parseFloat(prompt("Insira a quarta nota do aluno"));

mediaArit = (n1 + n2 + n3 + n4) / 4;

alert(`A média do aluno foi de ${mediaArit.toFixed(2)}`);