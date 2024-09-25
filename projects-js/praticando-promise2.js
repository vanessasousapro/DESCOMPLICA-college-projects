/* 
1) A classe "MinhaClasse" define um construtor que recebe um argumento "valor" e o atribui a uma propriedade da instância.
A classe contém o método "operacaoAssincrona", que retorna uma Promise.

2) Dentro da Promise, a operação realizada é multiplicar o valor por 2. Se o resultado for maior ou igual a zero, a Promise é resolvida com o valor resultante. Caso contrário, a Promise é rejeitada com uma mensagem de erro informando que o resultado é negativo.

3) Após criar uma instância de "MinhaClasse" com o valor 5, o método "operacaoAssincrona" é chamado.
O resultado é tratado com os blocos ".then" e ".catch", onde o sucesso exibe o resultado da operação e o erro exibe a mensagem de rejeição.*/

class MinhaClasse {
    constructor(valor) {
        this.valor = valor;
    }
    operacaoAssincrona() {
        return new Promise((resolve, reject) => {
            const resultado = this.valor * 2;

            if (resultado >= 0) {
                resolve(resultado)
            } else {
                reject('O resultado é negativo')
            }
        });
    }
}

const minhaInstancia = new MinhaClasse(5);
minhaInstancia.operacaoAssincrona()
    .then((resultado) => {
        console.log('O resultado da operação é: ', resultado)
    })
    .catch((erro) => {
        console.log('Ocorreu um problema: ', erro)
    })