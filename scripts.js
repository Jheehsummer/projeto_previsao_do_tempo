let chave = "d8922941defa5a3fd756f5d06b4f2d4a"

function colocaNaTela (dados) {
    console.log(dados)

    if (dados.message === 'city not found') {
        return document.querySelector(".cidade").innerHTML = "Cidade não encontrada!"
    }

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus-number").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = dados.main.humidity + "%"
    document.querySelector(".nuvem-sol").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".min").innerHTML = Math.floor (dados.main.temp_min) + "°C"
    document.querySelector(".max").innerHTML = Math.floor (dados.main.temp_max) + "°C"
}

async function buscarCidade(cidade) {
    let dados = await fetch 
    ("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&units=metric"
    
    )
    .then(resposta => resposta.json())

    colocaNaTela(dados)
}


function cliqueiNoBotao() {
    let cidade = document.querySelector (".input-cidade").value
    buscarCidade(cidade)
   
    }