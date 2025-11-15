
const saida = document.getElementById("saida");

document.addEventListener('keydown', function(evento){
    saida.textContent = "Você pressionou: " + evento.key;
});