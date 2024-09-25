/* 
1) O código cria uma Promise chamada "minhaPromise". Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona.

2) A função fornecida à Promise recebe dois argumentos: "resolve" e "reject". 
Se a operação for bem-sucedida, chama-se "resolve" para sinalizar sucesso, caso contrário, "reject" é chamado para sinalizar uma falha. No exemplo, a variável "sucesso" controla se a Promise é resolvida ou rejeitada. Se "sucesso" for true, a Promise será resolvida com a mensagem "Deu Bom!". Caso contrário, será rejeitada com a mensagem "Ocorreu um problema!".

3) A Promise é consumida usando os métodos "then" e "catch". Se a Promise for resolvida com sucesso, o "then" exibe a mensagem de sucesso no console.Se a Promise for rejeitada, o "catch" captura o erro e exibe a mensagem de falha no console.*/

const minhaPromise = new Promise((resolve, reject) => {

    const sucesso = true;

    if (sucesso) {
        resolve('Deu Bom!');
    } else {
        reject('Ocorreu um problema!');
    }

})

minhaPromise
    .then((resultado) => {
        console.log('Foi Sucesso: ' + resultado);
    })
    .catch((erro) => {
        console.log('Deu Ruim: ' + erro);
    })