var numeroSecreto = parseInt(Math.random() * (11 - 0) + 0);
var tentativas = 3;

while (tentativas > 0) {
    var chute = parseInt(prompt("Descubra o número secreto em 3 tentativas! Digite um número entre 0 e 10."));

    if (numeroSecreto == chute) {
        alert("Acertou");
        break;
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor");
        tentativas--;
    } else if (chute < numeroSecreto) {1
        alert("O número secreto é maior");
        tentativas--;
    }
}

if (chute != numeroSecreto) {
    alert("O número secreto era " + numeroSecreto);
}
