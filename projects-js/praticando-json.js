/* 
O código faz uma requisição para a API "https://jsonplaceholder.typicode.com/users" utilizando o método "fetch".

O "fetch" retorna uma Promise que, quando resolvida, contém a resposta da requisição.
A resposta é transformada em JSON através do método "Response.json()", que também retorna uma Promise.

Após o JSON ser obtido, a função "preencherLista" é chamada com os dados recebidos da API. A função "preencherLista" cria uma lista não ordenada (ul) e percorre os dados utilizando "forEach", criando um item de lista (li) para cada elemento do array "data".

Cada "li" exibe o nome do usuário (item.name) e é anexado à lista (ul). Por fim, a lista completa (ul) é inserida no elemento "lista-container" do HTML, que exibe a lista de usuários na página.

Este código realiza uma requisição assíncrona para preencher dinamicamente uma lista de usuários em um elemento HTML.*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => {
        preencherLista(data)
    })

function preencherLista(data) {
    const listaContainer = document.getElementById('lista-container')
    const ul = document.createElement('ul')
    data.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.name
        ul.appendChild(li)
    });

    listaContainer.appendChild(ul)
}

