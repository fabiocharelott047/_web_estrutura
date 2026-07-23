let nome_evento = "churras da galera"
let valor_total = 120.0
let lista_convidados = [
    {
        nome:'Fabio',
        idade: 18,
        pussui_carro: true,
        qnt_vagas: 4
    },
    {
        nome:'Luiz',
        idade: 18,
        pussui_carro: false,
        qnt_vagas: 0
    },

]

window.onload = () => {
    insereInfoRole ()
    populaTabelaParticipantes ()

}

function insereInfoRole (){
    let input_name = document.getElementById("role-name")
    let input_value = document.getElementById("role-value")
    
    input_name.value = nome_evento
    input_value.value = valor_total

}

function populaTabelaParticipantes(){
    let corpo_tabela = document.getElementById("corpo-da-tabela-participantes")
    let registros = ""

    for(let participante of lista_convidados){
        console.log(participante)
        registros += `
            <tr>
                <td>${participante.nome}</td>
                <td>${participante.idade}</td>
                <td>${participante.pussui_carro} (${participante.qnt_vagas} vagas)</td>
                <td><button class="btn-icon btn-danger" title="Remover">✕</button></td>
            </tr>
        `
    }
    corpo_tabela.innerHTML = registros
}
