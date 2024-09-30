const pessoa = {
    nome: 'joão',
    idade: 35,
    profissao: 'desenvolvedor'
}
//converte o objeto em uma string json.
const pessoajson = JSON.stringify(pessoa)
console.log(pessoa)
console.log(pessoajson)

//converte uma string JSON para um objeto javascript.
const pessoaObjeto = JSON.parse(pessoajson)
console.log(pessoaObjeto)