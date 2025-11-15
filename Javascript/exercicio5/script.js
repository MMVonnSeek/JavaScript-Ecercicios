const btn = document.getElementById("clicar");
const contadorSpan = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");

let cliques = 0;
contadorSpan.textContent = cliques;

btn.addEventListener("click", () => {
    cliques++;
    contadorSpan.textContent = cliques;
});

setTimeout(() =>{
    btn.disabled = true;
    mensagem.textContent = `Parabéns! Você clicou ${cliques} vezes em 5 segundos.`;
},5000);