function calcularIdadeMaisVelho() {
    // Obtém os valores dos inputs
    const idadeMonica = parseInt(document.getElementById('idadeMonica').value);
    const idadeFilhoA = parseInt(document.getElementById('idadeFilhoA').value);
    const idadeFilhoB = parseInt(document.getElementById('idadeFilhoB').value);

    if (isNaN(idadeMonica) || isNaN(idadeFilhoA) || isNaN(idadeFilhoB)) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos.';
        return;
    }


    const idadeFilhoC = idadeMonica - (idadeFilhoA + idadeFilhoB);


    const idadeMaisVelho = Math.max(idadeFilhoA, idadeFilhoB, idadeFilhoC);


    document.getElementById('resultado').textContent = `A idade do filho mais velho é: ${idadeMaisVelho} anos`;
}
