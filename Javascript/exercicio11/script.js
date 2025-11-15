

document.addEventListener('keydown', function(evento){
    const tecla = evento.key.toUpperCase();

    if(tecla === "R") document.body.style.backgroundColor = "red";
    else if(tecla === "G") document.body.style.backgroundColor = "green";
    else if(tecla === "B") document.body.style.backgroundColor = "blue";
});