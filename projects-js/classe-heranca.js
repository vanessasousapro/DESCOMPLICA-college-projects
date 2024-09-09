//Definição De Classe (Sintaxe)
class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
//Estrutura Condicional (Sintaxe)
    ligar(){
        if(this.ligado){
            console.log("Já está ligado")
            return;
        }
        this.ligado = true;
    }

}
//Conceito De Herança (Sintaxe) Herdando nome de dispositivoEletronico e adicionando Atributos exclusivos de smartPhone.
class SmarthPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new SmarthPhone(" Sansung ", " Preto ", " Galaxy A9 Plus ")

console.log(s1)