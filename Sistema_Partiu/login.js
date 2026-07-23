// Função de login
// funcao nome da funcao (nome dos parametros) { corpo da funcao }
// função assincrona é uma função que pode esperar por uma resposta de uma requisição, como se fosse um garçom que espera o pedido do cliente para trazer a comida.

async function onLogin() {
    // alert("Botão funcionando"); Tambem codigo para biblioteca 

    event.preventDefault(); // previne o padrão do botão de submit, que é recarregar a página

    let input_nome = document.getElementById("nome"); // pegando o valor do input
    let input_idade = document.getElementById("idade"); // pegando o valor do input

    // dom ou "document" é como se fosse o dicionario do python, onde voce pode acessar os elementos 
    // do html atraves do id, name, class, etc.

    let nome = input_nome.value; 
    let idade = input_idade.value; 


    window.location.href = "./gerenciamento/gerenciar.html"; // redirecionando para a página de gerenciamento


// let = variavel comum
// const = variavel constante

    console.log("Nome: " + input_nome.value); // testando o valor do input
    console.log("Idade: " + input_idade.value); // testando valor do input para mostrar no console

    //-----------------------\\

    

    /*
    * implementar comunicação com o node-red
    // let resposta = fetch("http://localhost:1880/login") 
    // para enviar
    let resposta = await fetch("http://localhost:1880/login", {
        method: "POST", // metodo de envio
        body: JSON.stringify({ nome: nome, idade: idade }), // corpo da requisição
        headers: { 
            "Content-Type": "application/json" 
        }, // cabeçalho da requisição

    })

    if (!resposta.ok) {
        console.log(resposta.status)
        return;
    }
    */

}

//api no node head é interface para levar e buscar info como se fosse um garçom. precisase esperaruma resposta.
