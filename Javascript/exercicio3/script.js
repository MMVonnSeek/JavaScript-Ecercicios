let produtos = document.querySelectorAll(".produto");

for (let p of produtos){
    console.log("Produtos:", p.textContent);
    p.style.color = "red";
}