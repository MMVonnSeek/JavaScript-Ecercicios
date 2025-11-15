const btnRapido = document.getElementById("rapido");
const btnDevagar = document.getElementById("devagar");
const resultado = document.getElementById("resultado");

let contarRapido = 0;
let contarDevagar =  0;
let totalCliques = 0;

function checarResultado() {
    if (totalCliques >= 10){
        if (contarRapido > contarDevagar){
            resultado.textContent = "O botão rápido venceu";
        } else if (contarDevagar > contarRapido){
            resultado.textContent = "O botão Devagar venceu";
        } else {
            resultado.textContent = "Empate";
        }
    }
}

btnRapido.addEventListener("click", () => {
    contarRapido++;
    totalCliques++;
    checarResultado();
});

btnDevagar.addEventListener("click", () => {
    contarDevagar++;
    totalCliques++;
    checarResultado();
});