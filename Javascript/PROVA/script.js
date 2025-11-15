let usuarios = [];

const formulario = document.getElementById('formulario');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputIdade = document.getElementById('idade');
const inputCargo = document.getElementById('cargo');
const campoBusca = document.getElementById('busca');
const listaUsuarios = document.getElementById('lista');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!inputNome.value || !inputEmail.value || !inputIdade.value || !inputCargo.value) {
        alert('Preencha todos os campos!');
        return;
    }

    const usuario = {
        nome: inputNome.value,
        email: inputEmail.value,
        idade: inputIdade.value,
        cargo: inputCargo.value
    };

    usuarios.push(usuario);

    formulario.reset();
    inputNome.focus();

    renderizar();
});

campoBusca.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const nome = card.querySelector('h3').textContent.toLowerCase();
        if (nome.includes(texto)) {
            card.classList.remove('oculto');
        } else {
            card.classList.add('oculto');
        }
    });
});

function renderizar() {
    listaUsuarios.innerHTML = '';

    if (usuarios.length === 0) {
        listaUsuarios.innerHTML = '<p class="vazio">Nenhum usuário cadastrado</p>';
        return;
    }

    usuarios.forEach((usuario, indice) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${usuario.nome}</h3>
            <p><strong>E-mail:</strong> ${usuario.email}</p>
            <p><strong>Idade:</strong> ${usuario.idade}</p>
            <p><strong>Cargo:</strong> ${usuario.cargo}</p>
        `;

        card.addEventListener('dblclick', () => {
            usuarios.splice(indice, 1);
            renderizar();
        });

        listaUsuarios.appendChild(card);
    });
}
renderizar();