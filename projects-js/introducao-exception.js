/* 
1) A função "divisao" realiza a divisão de dois números, "a" e "b".

2) Se o divisor "b" for igual a zero, a função lança um erro com a mensagem "Divisão por zero não é permitida".

3) O bloco "try" tenta executar a função "divisao" com os valores fornecidos.
Se um erro ocorrer (como a divisão por zero), o bloco "catch" captura a exceção e exibe a mensagem de erro no console.

4) Caso contrário, o resultado da divisão será exibido no console.*/

function divisao(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida');
    }
    return a / b
}
try {
    const resultado = divisao(10, 0);
    console.log('Resultado:' + resultado)
} catch (error) {
    console.log('Ocorreu uma exceção: ' + error.message)
}
