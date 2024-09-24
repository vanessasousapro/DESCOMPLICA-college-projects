// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

// Classe Gerente herdando de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor herdando de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, 'Desenvolvedor');
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para exibir erros na página
function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.innerHTML = `<p style="color:red;">Erro: ${mensagem}</p>`;
}

// Função para limpar erros
function limparErro() {
    const erroDiv = document.getElementById('erro');
    erroDiv.innerHTML = '';
}

// Função para criar instâncias de Gerente ou Desenvolvedor
function criarFuncionario() {
    limparErro();

    try {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        if (!nome || !idade || !cargo) {
            throw new Error('Preencha todos os campos obrigatórios!');
        }

        let funcionario;

        if (cargo === 'gerente') {
            if (!departamento) {
                throw new Error('Preencha o departamento para Gerente.');
            }
            funcionario = new Gerente(nome, idade, departamento);
        } else if (cargo === 'desenvolvedor') {
            if (!linguagem) {
                throw new Error('Preencha a linguagem de programação para Desenvolvedor.');
            }
            funcionario = new Desenvolvedor(nome, idade, linguagem);
        } else {
            throw new Error('Selecione um cargo válido.');
        }

        // Exibir o resultado na página
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
        <p>${funcionario.seApresentar()}</p>
        <p>${funcionario.trabalhar()}</p>
        ${funcionario instanceof Gerente ? `<p>${funcionario.gerenciar()}</p>` : ''}
        ${funcionario instanceof Desenvolvedor ? `<p>${funcionario.programar()}</p>` : ''}`;

    } catch (error) {
        exibirErro(error.message);
    }
}
