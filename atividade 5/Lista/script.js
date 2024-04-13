const lista = document.getElementById('lista');
const conteudo = [];

function listar_inicio(){
    const item = document.getElementById('item');
    for(x=conteudo.length-1; x>=0; x--){
        conteudo[x+1] = conteudo[x]; 
    }
    conteudo[0] = item.value;
    item.value = "";
    atualizar();
}

function listar_meio(){
    const item = document.getElementById('item');
    const ref = document.getElementById('referencia');
    let ant = 0;
    let x;
    while(conteudo[ant] != ref && ant<conteudo.length){
        ant++
    }
    ant--;

    for(x=conteudo.length-1; x>ant; x--){
        conteudo[x+1] = conteudo[x]; 
    }
    console.log(x);
    console.log(ant);
    console.log(ref.value);
    conteudo[ant+1]=item.value;
    item.value = "";
    ref.value = "";
    atualizar();
}

function listar_fim(){
    const item = document.getElementById('item');
    conteudo.push(item.value);
    item.value = "";
    atualizar();
}

function atualizar() {
    lista.innerHTML = "";
    for (let i = 0; i < conteudo.length; i++) {
        const li = document.createElement("li");
        li.textContent = conteudo[i];
        lista.appendChild(li);
    }
}

function retirar(){
    conteudo.pop()
    atualizar();
}