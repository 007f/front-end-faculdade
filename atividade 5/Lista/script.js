const lista = document.getElementById('lista');
const conteudo = [];

function listar_inicio(){
    const item = document.getElementById('item');
    if(item.value==''){

    }else{
        for(x=conteudo.length-1; x>=0; x--){
            conteudo[x+1] = conteudo[x]; 
        }
        conteudo[0] = item.value;
        item.value = "";
        atualizar();
    }
}

function listar_meio(){
    const item = document.getElementById('item');
    if(item.value==''){

    }
    else{
        const ref = document.getElementById('referencia');
        let ant = 0;
        let x;
        while(conteudo[ant] != ref.value && ant<conteudo.length){
            ant++;
        }

        for(x=conteudo.length-1; x>ant; x--){
            conteudo[x+1] = conteudo[x]; 
        }
        console.log("x="+x);
        console.log("ant="+ant);
        console.log("ref="+ref.value);
        if (ant==conteudo.length) {
            conteudo.push(item.value);
        }
        else{
            conteudo[ant+1]=item.value;
        }
        
        item.value = "";
        ref.value = "";
        atualizar();
    }
}

function listar_fim(){
    if(item.value==''){

    }else{
        const item = document.getElementById('item');
        conteudo.push(item.value);
        item.value = "";
        atualizar();
    }
    
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
    let item = document.getElementById('item');
    if(item.value==''){
        conteudo.pop();
        
    }else{
        let ant = 0;
        let x;
        while(conteudo[ant] != item.value && ant<conteudo.length){
            ant++;
        }

        for(x=ant; x<conteudo.length; x++){
            if(x==conteudo.length-1){
                conteudo.pop();
            }else{
                conteudo[x] = conteudo[x+1];
            }
             
        }  
    }
    atualizar();
    item.value = "";
}