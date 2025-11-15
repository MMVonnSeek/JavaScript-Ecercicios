const email = document.getElementById("email");
const erroEmail = document.getElementById("erroEmail");
const btnValidar = document.getElementById("btnValidar");

btnValidar.addEventListener("click", function () {
    if (!email.value.includes("@") || !email.value.includes(".")) {
        erroEmail.textContent = "Email inválido";
    } else {
        erroEmail.textContent = "";
        alert("Email válido");
    }
});