const nome = document.getElementById('nome');
const botaoAdd = document.getElementById('add');
const listaUl = document.getElementById('lista');
const convidados = [];

botaoAdd.addEventListener('click', function(){
    convidados.push(nome.value);
    console.log(convidados);
    atualizar();
});

function atualizar(){
    listaUl.innerHTML = ""; 
    for(let index=0; index< convidados.length; index++){
        const li = document.createElement('li');
        li.textContent = convidados[index];
        listaUl.appendChild(li);
    }

}