// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
    }
}

// Classe derivada Gerente (herança da classe funcionario) adicionando departamento.
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo); // Chama o construtor da classe base Funcionario
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

// Classe derivada Desenvolvedor
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo); // Chama o construtor da classe base Funcionario
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criando instâncias de Gerente e Desenvolvedor
const gerente = new Gerente('Alice', 40, 'Gerente', 'Vendas');
const desenvolvedor = new Desenvolvedor('Vanessa', 27, 'Desenvolvedora', 'JavaScript');

// Chamando os métodos para Gerente
gerente.seApresentar(); // Saída: Olá, meu nome é Alice, tenho 40 anos e sou Gerente.
gerente.trabalhar();    // Saída: Alice está trabalhando como Gerente.
gerente.gerenciar();    // Saída: Alice está gerenciando o departamento de Vendas.

// Chamando os métodos para Desenvolvedor
desenvolvedor.seApresentar(); // Saída: Olá, meu nome é Bob, tenho 30 anos e sou Desenvolvedor.
desenvolvedor.trabalhar();    // Saída: Bob está trabalhando como Desenvolvedor.
desenvolvedor.programar();    // Saída: Bob está programando em JavaScript.
