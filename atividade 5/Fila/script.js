const add = document.getElementById("add");
const remove = document.getElementById('reti');
const pilha = document.getElementById('fila');
const conteudo = [];

function empilhar(){
    const item = document.getElementById('item');
    conteudo.push(item.value);
    item.value = "";
    atualizar();
}

function atualizar() {
    pilha.innerHTML = "";
    for (let i = 0; i < conteudo.length; i++) {
        const li = document.createElement("li");
        li.textContent = conteudo[i];
        pilha.appendChild(li);
    }
}

function retirar(){
    conteudo.shift()
    atualizar();
}