//1 - Forma de criar objetos

//Objeto chamado pessoa formado por duas prorpiedades com chave = nome valor = Vanessa / chave = sobrenome e valor = Sousa.
const pessoa = {
    nome: 'Vanessa',
    sobrenome: 'Sousa'
}

console.log(pessoa['sobrenome'])

//2 - Forma de criar objetos
const funcionario = new Object();
funcionario.nome = 'Karen'
funcionario.sobrenome = 'Silva'

console.log(funcionario.nome)


//3 - Forma de criar objetos
function criarPessoa(nome, sobrenome){
    return {nome,sobrenome}
}

const p1 = criarPessoa('Arthur','Sousa')
const p2 = criarPessoa('Maria','Joaquina')

console.log(p1.nome)
console.log(p2)

//4 - Forma de criar objetos
function creatPeople(name, surname, i){
    return {name, 
            surname,
            age:i,
            get nameComplet(){
                return `${this.name} ${this.surname}`
            }
        }

}

const people1 = creatPeople('Leticia','Amancio', 27)
const people2 = creatPeople('Luiz','Fernando', 54)

console.log(people1.nameComplet)
console.log(people2)

