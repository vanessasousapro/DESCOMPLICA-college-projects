class pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log("Olá" + this.nome);
    }
}

pessoa1 = new pessoa(" Vanessa "," Sousa ")
pessoa1.falar()