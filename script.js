// VARIÁVEIS : É um espaço da memória do computador que 
// FUNÇÂO : É um trecho de código que só é executado quando

let chave ="6fe960703492fbcb5da5927d840b34c0"

function mostrarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)  + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML =  "umidade" + dados.main.humidity + "%"
    // Muda o icone da nuvem de acordo com o tempo//
    document.querySelector(".icone"). src="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

// async = busca informação no servidor //
async function buscarCidade(cidade){ 

    // await = está esperando a busca da informação no servidor //
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
    .then(resposta => resposta.json())

    mostrarNaTela(dados)
   
}

function Botao(){ //criando a função//

    let cidade = document.querySelector(".input-cidade").value  // criando variável//
    buscarCidade(cidade)
}