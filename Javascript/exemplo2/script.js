//getElementByID()
let titulo = document.getElementById("titulo");
console.log("getElementById:", titulo.innerText);

//getElementByClassName()
let paragrafos = document.getElementsByClassName("texto");

console.log("getElementsByClassName");
console.log(paragrafos[0].innerText);
console.log(paragrafos[1].innerText);


//getElementByTagName()
let divs = document.getElementsByTagName("div");

console.log("getElementByTagName:");
console.log(divs[0].innerText);
console.log(divs[1].innerText);


//querySelector()
let primeiroItem = document.querySelector(".item");
console.log("querySelector:(primeiro .item):", primeiroItem.innerText);


//querySelectorAll()
let todosItens = document.querySelectorAll(".item");

console.log("querySelectorAll:");
todosItens.forEach(li => console.log(li.innerText));


//Acessando mult. Elementos e Iterando
let itens = document.querySelectorAll(".item");

for (let item of itens){
    console.log(item.textContent);
    item.style.color = "blue";
}

function mudarEstilo() {
        document.querySelector("body").style.backgroundColor = "red";
    }