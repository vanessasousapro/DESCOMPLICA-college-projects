// Praticando if - Estrutura Condicional

var pais = "Brasil";

if( pais != "Brasil"){
    console.log("Você é estrangeiro!");
}
else{
    console.log("Você é brasileiro!")
}

// Utilizando else if

var idade = 17;

if (idade < 16){
    console.log("Não Vota");
}
else if(idade < 18 || idade > 65){
    console.log("Voto Opcional");
}
else{
    console.log("Voto Obrigatório");
}

//Exercicio 01 Faculdade
let x = 7;
let resultado = "";

if (x > 10) {
    resultado = "A";
}else if (x < 5) {
    resultado = "B"
} else {
    resultado = "c";
}

console.log(resultado);


//Atividade 01 Faculdade
let totalCompra = 150;
let desconto = "";

if(totalCompra > 200) {
    desconto = "20%";
}else if (totalCompra > 100){
    desconto = "10%";
}else {
    desconto = "Sem Desconto";
}

console.log(desconto);

//Atividade 03 Faculdade
let produto = "leite";
let categoria;

switch (produto) {
    case "arroz":
    case "feijão":
    case "macarrão":
        categoria = "Alimentos";
        break;
    
    case "sabonete":
    case "shampoo":
    case "pasta de dente":
        categoria = "Higiene pessoal";
        break;
    
    case "caderno":
    case "lápis":
    case "borracha":
        categoria = "Material escolar";
        break;
    
    default:
        categoria = "Categoria não definida";
        break;
}

console.log(`A categoria do produto ${produto} é: ${categoria}`);

//Atividade 04 Faculdade

livro = "marquinhos"
localizacao = "";

switch(livro){
    case "Harry Potter":
        localizacao = "Prateleira A"
        break
    case "Percy Jackson":
        localizacao = "Prateleira B"
        break
    case "O senhor dos anéis":
        localizacao = "Prateleira C"
        break
    default:
        localizacao = "Localização Não Encontrada"
}

console.log("O livro", livro, "Esta na", localizacao)

//Atividade 05 Faculdade

let diaSemana = 4;

switch (diaSemana) {
    case 0:
        console.log("HOje é dominho");
    case 1:
        console.log("HOje é segunda");
    case 2:
        console.log("HOje é terça");
    default:
        console.log("Esse dia da semana não existe");
}


//Atividade Prática
var pedidoCliente = "agua"
bebida = "";

switch(pedidoCliente){
    case "café":
        bebida = "O café custa R$10,00"
        break;
    case "leite":
        bebida = "O leite custa R$12,00"
        break;
    case "chá":
        bebida = "O chá custa R$20,00"
        break;
    default:
        bebida = "Só temos café, leite, ou chá";
        break;
}

console.log(bebida);