/* 
1) O código usa o método "map" para duplicar os valores do array "numeros".

2) Durante o mapeamento, verifica se cada elemento do array é exatamente um número.

3) Se algum elemento não for do tipo "number", é lançado um erro com a mensagem "O array só pode ter números".

4) O bloco "try" tenta executar o código que duplica os números.

5) Se uma exceção for lançada (como a presença de um valor que não seja número no array exemplo:('dois'ou'2')), o bloco "catch" captura o erro e exibe a mensagem correspondente. 

6) Caso contrário, o array com os números multiplicados por 2 é exibido no console exemplo:([2,4,6,8,10]).*/

const numeros = [1, 2, 3, 4, 5];

try {
    const doubleNumbers = numeros.map((num) => {
        if (typeof num !== 'number') {
            throw new Error('O array só pode ter números')
        }
        return num * 2;
    })
    console.log(doubleNumbers);
} catch (error) {
    console.log('Ocorreu uma exceção: ' + error.message);
}