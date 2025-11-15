async function gerarConselho() {
    await fetch("https://api.adviceslip.com/advice").then(response => response.json())
    .then(data => {
        console.log(data);
    const conselho = data.slip.advice;
    document.getElementById("conselhoTexto").textContent = `"${conselho}"`;
})
.catch (erro => {
    console.error("Erro ao buscar conselho", error);
    alert("Não foi possível gerrar um conselho agora");
});
}