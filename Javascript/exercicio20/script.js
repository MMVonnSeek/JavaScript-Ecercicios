const btc = document.getElementById("btc");
const eth = document.getElementById("eth");
const doge = document.getElementById("doge");
const erro = document.getElementById("erro");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
    .then(function(resposta){return resposta.json();
    })
    .then(function(dados){
        btc.innerText = "$ " + dados.bitcoin.usd;
        eth.innerText = "$ " + dados.ethereum.usd;
        doge.innerText = "$ " + dados.dogecoin.usd;
        erro.innerText = "";
    })
    .catch(function(){
        erro.innerText = "Ero ao buscar dados. Tente novamente";
    });
});