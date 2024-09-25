
/* 
A função "obterValor" retorna uma Promise que recebe um valor e faz a seguinte verificação:
- Se o valor for maior que 10, adiciona 1 ao valor e resolve a Promise com o novo valor.
- Caso o valor seja 10 ou menor, a Promise é rejeitada com uma mensagem de erro.

A função "dobrarValor" recebe um valor e retorna o dobro desse valor.
A função "adicionar10" recebe um valor e retorna o valor somado com 10.

O fluxo de execução das Promises é o seguinte:
1. "obterValor(28)" é chamado e a Promise resolve porque 28 é maior que 10.
2. O valor retornado (28 + 1 = 29) é passado para a função "dobrarValor", dobrando o valor para 58.
3. O novo valor (58) é então passado para a função "adicionar10", resultando em 68.
4. O valor 68 é somado com 5, resultando no valor final de 73, que é exibido no console.

Se a Promise for rejeitada em qualquer ponto (valor inicial menor ou igual a 10), o bloco "catch" será executado e exibirá a mensagem de erro.*/

function obterValor(valor) {
    return new Promise((resolve, reject) => {
        if (valor > 10) {
            valor += 1;
            resolve(valor)
        } else {
            reject('Não foi possível obter o valor!');
        }
    })
}
function dobrarValor(valor) {
    return valor * 2;
}
function adicionar10(valor) {
    return valor + 10;
}
obterValor(28)
    .then((valor) => {
        console.log('Valor obtido');
        return dobrarValor(valor);
    })
    .then((novoValor) => {
        console.log('fazendo o segundo tratamento');
        return adicionar10(novoValor);
    })
    .then((resultado) => {
        total = resultado + 5;
        console.log('O resultado final é: ' + total);
    })
    .catch((erro) => {
        console.log('Ocorreu um erro!', erro);
    })