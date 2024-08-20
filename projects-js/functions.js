//Temos 3 formas de usar as funções:
//Função reular = Consiste no uso da palavra chave function, seguida por:
//-Função anônima
//-Arrow function


//Função Regular:
function multiplicar(x,y){
    return x * y
}

var a = multiplicar(4,2)
console.log(a)

var b = multiplicar(3,2)
console.log(b)
//--------------------------------------------------------------------------------------------------------

//Função Anônima:
var infoCal = function(a, b, c){
    return a + b + c;
}

console.log(infoCal(2,5,6))
//--------------------------------------------------------------------------------------------------------

//Arrow Function:
const soma = (num1, num2) => {
    return num1 + num2
}

console.log(soma(3,6))
//--------------------------------------------------------------------------------------------------------

//Outros exemplos:
//Map() + Arrow Function

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valores = numeros.map((num) => num * num)

console.log(valores)
//--------------------------------------------------------------------------------------------------------

//Outros exemplos:
//interando o array com map() + transformando a primeira letra de cada palavra do array em maiúscula com uma function.

var listaProdutos = ['geladeira', 'fogão', 'microondas', 'airfryer', 'maquina de lavar roupas'];
var listaMaiuscula = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

console.log(listaMaiuscula)