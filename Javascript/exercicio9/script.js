
const caixa = document.querySelector("#caixa");

caixa.addEventListener('mouseover', function (){
    caixa.style.backgroundColor = 'blue';
    caixa.textContent = 'Azul';
});

caixa.addEventListener('mouseout', function (){
    caixa.style.backgroundColor = 'red';
    caixa.textContent = 'Vermelho';
});