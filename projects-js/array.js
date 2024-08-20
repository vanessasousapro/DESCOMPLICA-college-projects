
//CRIAÇÃO DE ESTRUTURA BÁSICA DE UM ARRAY//

/**As posições do array começam a ser contadas do 0 
ou seja seguindo o array a baixo posição 0 = valor 8, posição 1 = valor 1...**/
var valores = [8, 1, 7, 2, 9];
console.log(valores[3]);

/**este for(laço de repetição) está sendo utilizado para percorrer o conteúdo do array acima mostrando qual a posição e cada valor respectivamente.**/
for (var pos = 0; pos < valores.length; pos++){
    console.log("posição: " + pos + " valor: " + valores[pos]);
}
//print esperado do for acima:
/**
posição: 0 valor: 8
posição: 1 valor: 1
posição: 2 valor: 7
posição: 3 valor: 2
posição: 4 valor: 9 
**/
//--------------------------------------------------------------------------------

//Formas diferentes de fazer um Array:

//Exemplo 01:
var carros = [];
carros[0] = "Volvo"
carros[1] = "Jeep"
carros[2] = "Fiat"
carros[3] = "Honda"
console.log(carros)

//Exemplo 02:
var motos = new Array ("BMW","Honda","Yamaha");
//--------------------------------------------------------------------------------

//Como calcular a média de todos os números de um array?
var soma = 0;
for (var pos = 0; pos < valores.length; pos++){
    soma += valores[pos];
    //soma = soma + valores[pos];
}

var media = soma/valores.length;

console.log(media);

//--------------------------------------------------------------------------------

//Localizar o maior valor de um array de números;

/**Crie um array com nomes de cidade do Brasil e 
diga qual a cidade tem mais caracteres no nome;**/

//--------------------------------------------------------------------------------

//MANIPULAÇÃO DE ARRAY//

//(reverse)Inverte as posições dos números do array;
var valores = [8, 1, 7, 2, 9];
console.log("Array invertido: " + valores.reverse());

//(join) Tranforma um array em uma string;
var arrayJoin = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayJoin.join('|'));

//(shift) Retira o primeiro elemento de um array;
var arrayShift = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var valorRetirado = arrayShift.shift();
console.log(arrayShift);
console.log(valorRetirado);

//(indexOf) Mostra qual é a posição do elemento dentro do array;
var arrayIndexOf = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
console.log("Posição do número 3 é: " + arrayIndexOf.indexOf(3));

//(push) Adiciona um novo elemento ao final do array;
var arrayPush = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
arrayPush.push(10)
console.log(arrayPush);

//(pop) Remove o ultimo elemento de um array;
var arrayPop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayPop.pop()
console.log(arrayPop);

//(unshift) Adiciona um elemento ao início de uma matriz;
var arrayUnshift = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayUnshift.unshift(0);
console.log(arrayUnshift);

//------------------------------------------------------------------------------------------------------------------------
// Função Splice ( Removeclear Elementos Do Array)

var arr = [1, 2, 3, "Hello, World !", 4.20, -7];

arr.splice(3, 1);

console.log(arr);

// Vamos Utilizar Um Array Com Nomes E Vamos Remover Um Nome e Substituir Por Outro:

var nomes = ["Maria","João","Paulo","Lucas"];
var novos = nomes.splice(1, 1, "Bruno", "Joyce");

console.log(nomes);


var pais = ["Brasil", "Argentina", "Colombia"]
pais.unshift("Uruguai");

console.log(pais)

//------------------------------------------------------------------------------------------------------------------------
// Utilizando Slice e Concat Para Manipulação De Arrays:

var pessoas = ["Eduardo", "Joana", "Rosana"];
var pessoas1 = pessoas.slice(1, 3);

console.log(pessoas)
console.log(pessoas1)

//Utilizando Concat

var empresa = pessoas.concat(pessoas1);

console.log(empresa);
//---------------------------------------------------------------------------------------------------
//Utilizando Filter

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

//Utilizando Filter Com Uma Função:
var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
)

console.log(numerosFiltrados);

    function buscarValores(valor){
        return valor < 5;
    }

    var numerosEncontrados = numeros.filter(buscarValores);

console.log(numerosEncontrados);

var r1 = numeros.filter((valor) => {
    return valor > 5;
})

console.log(r1)

var r2 = numeros.filter(valor => valor > 5);


// Utilizando um objeto para filtrar 

var funcionarios = [
    {nome: "Marcos", idade: 21},
    {nome: "Vinicius", idade: 15},
    {nome: "Roberto", idade: 57},
    {nome: "Felipe", idade: 39},
]

var pessoasListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length < 7
    }
)

console.log(pessoasListagem);

//------------------------------------------------------------------------------------------------------------------------
// Utilizando Map

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var num = number.map(function(valor){
    return valor * 2;
});

console.log(num)

//Utilizando Map Em Objetos

var funcionarios = [
    {nome: "Marcos", idade: 21},
    {nome: "Vinicius", idade: 15},
    {nome: "Roberto", idade: 57},
    {nome: "Felipe", idade: 39},
]

nomes = funcionarios.map(pessoa => pessoa.nomes);
console.log(nomes)

//------------------------------------------------------------------------------------------------------------------------
//Utilizando Reduce

var arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;
for(var i = 0; i < arrnum.length;i++){
    total += arrnum[i];
}

console.log(total);

//------------------------------------------------------------------------------------------------------------------------
// Utilizando ForEach Com Arrays

var loopFor = [10, 20 , 30, 40, 50, 60];

//Formas Diferentes De Escrever A Mesma Coisa:

for (let valor of loopFor){
    console.log(valor);
}

loopFor.forEach(valor => console.log(valor));