/*
1) A função "checkPositive" verifica se todos os elementos de um array são números positivos.

2) Primeiro, verifica se o argumento "numeros" é um array, lançando um erro se não for.(O argumento deve ser um array)

3) Em seguida, usa o método "every" para testar se todos os elementos do array são maiores que 0.

4) Se houver algum número que não seja positivo, a função lança um erro informando que o array deve conter apenas números positivos(O array deve ter apenas números positivos).

5) Se todos os números forem positivos, a função retorna "true".

6) O bloco "try" chama a função com um array de números e, se NÃO houver erros, exibe "true" no console.

7) Caso ocorra um erro, o bloco "catch" captura a exceção e exibe a mensagem de erro no console.(Ocorreu um erro:)*/

function checkPositive(numeros) {
    if (!Array.isArray(numeros)) {
        throw new Error('O argumento deve ser um array');
    }

    const allPositive = numeros.every((num) => num > 0);
    if (!allPositive) {
        throw new Error('O array deve ter apenas números positivos');
    }
    return true;
}

try {
    const numbers = [1, 2, 3, 4, 5, 6];
    const isPositive = checkPositive(numbers);
    console.log(isPositive);
} catch (error) {
    console.log('Ocorreu um erro: ', error.message)
}