//Utilizando o forEach:
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.forEach(valor => console.log(valor));

var total = 0;
a.forEach(valor => {
    total += valor;
})

console.log(total);

a.forEach(function(valor,indice,array){
    console.log*array[indice];
})

//Utilizando o for in: Muito utilizando quando queremos bucar o objeto ou array todo como mostrado no exemplo a baixo.
var carro = [{modelo: 'Audi A3', marca: 'Audi', ano: 2020}, {modelo: 'Compass', marca: 'Jeep', ano: 2021}]
for (let caracteristica in carro){
    console.log(carro[caracteristica]);
}

//Utilizando o for of: Muito utilizado quando se quer pegar um elemento do objeto oou array como apenas o ano do carro como visto no exemplo a baixo.
for (let car of carro){
    console.log(car.ano)
}

//Utilizando o while e do while:
//While -->
var c = 1;
while(c <= 10){
    console.log(c);
    c++;
}

//do while -->
var t = 1;
do{
    console.log(t);
    t++
}while(t < 6)

//Exercicio 01
const carro = {

    modelo: 'Audi A3',
  
    marca: 'Audi',
  
    ano: 2020
  
  };
  
  for (let caracteristica in carro) {
  
    console.log(caracteristica + ': ' + carro[caracteristica]);
  
  }

  //Exercicio 02
  const carros = [

    { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },
  
    { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }
  
  ];
  
  for (let indice in carros) {
  
    console.log('Carro ' + (parseInt(indice) + 1) + ':');
  
    for (let atributo in carros[indice]) {
  
      console.log(atributo + ': ' + carros[indice][atributo]);
  
    }
  
    console.log('-----');
  
  }
 
  //Exercicio 03
  const numeros = [2, 4, 6, 8, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 === 0) {

    soma += numeros[i];

  }

}

console.log(soma);