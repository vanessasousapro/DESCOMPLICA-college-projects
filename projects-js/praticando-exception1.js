/*
1) A função "processName" recebe um nome e um callback como argumentos.

2) Primeiramente, a função verifica se o "nome" é uma string.

3) Se o nome não for uma string, o callback é chamado com um erro informando que o nome deve ser uma string.

4) Em seguida, verifica se o "nome" está vazio (comprimento igual a 0). Se estiver vazio, o callback é chamado com um erro dizendo que o nome não pode estar vazio.

5) Se o nome for válido, o callback é chamado com "null" no lugar do erro e uma mensagem de sucesso.

6) A função "processName" é então chamada com o nome "Vanessa", e a callback passada verifica se há um erro.

7) Se houver um erro, ele é exibido no console; caso contrário, a mensagem de sucesso é exibida.*/

function processName(nome,callback) {
    if (typeof nome !== 'string'){
        callback(new Error('O nome dever ser uma string'));
        return;
    }
    if (nome.length === 0) {
        callback(new Error('O nome não pode estar vazio'));
        return;
    }
    callback(null, 'Nome processado com sucesso!')
}

processName('Vanessa', (error, result) => {
    if(error) {
        console.log('Ocorreu um problema:', error.message);
    } else{
        console.log(result)
    }
})