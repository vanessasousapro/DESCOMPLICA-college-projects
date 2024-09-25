/* 
1) A função "somarArray" recebe um array como argumento e retorna uma Promise. A Promise realiza a soma dos elementos do array se o argumento passado for válido.

2) Se o argumento não for um array, a Promise é rejeitada com a mensagem de erro "O argumento passado não é um array".

3) O método "reduce" é utilizado para somar os números do array. Ele percorre cada elemento, acumulando o total. Se a soma for bem-sucedida, a Promise é resolvida com o valor da soma.

4) O bloco ".then" é utilizado para capturar e exibir o resultado da soma no console quando a Promise for resolvida. Caso ocorra um erro (como passar um argumento que não é um array poe exemplo uma string), o bloco ".catch" captura e exibe a mensagem de erro.*/

function somarArray(array){
    return new Promise((resolve, reject) =>{
        if(!Array.isArray(array)){
            reject('O argumento passado não é um array.')
        }

        const soma = array.reduce((total, num) => total + num,0)

        resolve(soma)
    })
}

const myArray = [1,2,3,4,5];
somarArray(myArray)
.then((resultado) => {
    console.log('A soma dos elementos é: ', resultado)
})
.catch((erro) => {
    console.log('Ocorreu um erro: ', erro);
})