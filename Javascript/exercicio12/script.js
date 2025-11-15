
const mensagens = document.querySelectorAll(".mensagem");

mensagens.forEach(function(msg){
    msg.addEventListener('mouseover', function(){
        msg.style.backgroundColor = "orange";
    });
    msg.addEventListener('mouseout', function(){
        msg.style.backgroundColor = "lightgray";
    });
});