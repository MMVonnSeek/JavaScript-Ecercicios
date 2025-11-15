const painel = document.getElementById("painel");
const emoji = document.getElementById("emoji");
const btnFeliz = document.getElementById("feliz");
const btnTriste = document.getElementById("triste");
const btnBravo = document.getElementById("bravo");
const btnSurpreso = document.getElementById("surpreso");

function alteraEmocao(textoEmoji, descricao, corFundo){
    emoji.textContent = textoEmoji;

    painel.style.backgroundColor = corFundo;

    let desc = document.getElementById('descricao-emocao');

    if(!desc){
        desc = document.createElement('p');
        desc.id = 'descricao-emocao';
        desc.style.marginTop = '10';
        painel.appendChild(desc);
    }
    desc.textContent = descricao;
}

btnFeliz.addEventListener('click', function() {
    alteraEmocao('😄', 'Você está feliz!', '#fff9c4');
});
btnTriste.addEventListener('click', function() {
    alteraEmocao('😔', 'Você está triste!', '#c4e3ffff');
});
btnBravo.addEventListener('click', function() {
    alteraEmocao('😡', 'Você está bravo!', '#ff2f2fff');
});
btnSurpreso.addEventListener('click', function() {
    alteraEmocao('😲', 'Você está surpreso!', '#dbbaf7ff');
});