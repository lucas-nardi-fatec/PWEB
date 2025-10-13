var n1, n2;

n1 = parseFloat(prompt("Insira o primeiro número"));
n2 = parseFloat(prompt("Insira o segundo número"));

confirm(`Os resultados esperados são os seguintes:
        soma: ${n1 + n2}
        subtração: ${n1 - n2}
        produto: ${n1 * n2}
        divisão: ${n1 / n2}
        resto: ${n1 % n2}

        Confirme abaixo se os resultados estão do agrado.`);