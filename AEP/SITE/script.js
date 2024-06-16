    let list1 = [];
    let list2 = [];


window.onload = function(){
    list1 = document.getElementsByClassName("list1");
    list2 = document.getElementsByClassName("list2");
    
    
    console.log(list1);
    console.log(list2);
    atualizarConteudo();
}

function inserirConteudo(){
    let edt = document.getElementById("AbaInsercao");
    edt.style.display = "flex"
}

function remover(i, lista){
    if(lista==1){
        if (confirm(`Tem certeza que deseja excluir o item ${list1[i].nome}?`)) {
            list1.splice(i, 1);
        }
    }else{
        if (confirm(`Tem certeza que deseja excluir o item ${list2[i].nome}?`)) {
            list2.splice(i, 1);
        }
    }
    let listaGrande = [];
    for(let x = 0; x<list1.length; x++){
        let obj = {
            nome: list1[x].nome,
            link: list1[x].link
        };
        listaGrande.push(obj);
    }
    for(let x = 0; x<list2.length; x++){
        obj = {
            nome: list2[x].nome,
            link: list2[x].link
        };
        listaGrande.push(obj);
    }
    organizarConteudo(listaGrande)
}      

function cancelarInsercao(){
    document.getElementById("edtNome").value = "";
    document.getElementById("edtLink").value = "";
    document.getElementById("AbaInsercao").style.display = "none";
}

function insercao(){
    let nome = document.getElementById("edtNome").value;
    let link = document.getElementById("edtLink").value;

    if(nome==""){
        alert("Preencha todos os campos");
    }else{
        let obj={
        nome: nome,
        link: link
    };
    let li = document.createElement("li");
    li.innerHTML = `<a href="${obj.link}" class="list1">${obj.nome}</a>`
    document.getElementById("lista2").appendChild(li);
    edcao();
    document.getElementById("edtNome").value = "";
    document.getElementById("edtLink").value = "";
    document.getElementById("AbaInsercao").style.display = "none";
    }
}
    

function edcao(){
    list1 = [];
    list2 = [];
    list1 = document.getElementsByClassName("list1");
    list2 = document.getElementsByClassName("list2");
    atualizarConteudo();
}

function atualizarConteudo(){
    let listaGrande = [];
    for(let i = 0; i<list1.length; i++){
        let nome = list1[i].innerHTML;
        let link = list1[i].href;
        obj = {
            nome: nome,
            link: link
        };
        listaGrande.push(obj);
    }
    for(i = 0; i<list2.length; i++){
        let nome = list2[i].innerHTML;
        let link = list2[i].href;
        obj = {
            nome: nome,
            link: link
        };
        listaGrande.push(obj);
    }
    console.log(listaGrande);
    organizarConteudo(listaGrande);
}

function organizarConteudo(listaG){
    list1 = [];
    list2 = [];
    for(let i = 0; i<listaG.length; i++){
        if(list1.length<=list2.length){
            list1.push(listaG[i]);
        }else{
            list2.push(listaG[i]);
        }
        
    }
    console.log(list1);
    console.log(list2);
    validacaoUsuario();
}

function validacaoUsuario(){
    let exccont = [];
    exccont = document.getElementsByClassName("exccont");

    const stringJson = localStorage.getItem('login');
    const login = JSON.parse(stringJson);

    let edtAba = document.getElementById("edtAba");
    if (login !== null){
        if(login.nome == "adm" && login.senha == "123"){
            edtAba.style.display = "flex";
            edtAba.style.alignItems = "center";
            edtAba.style.justifyContent = "center";
           
            imprimirComEdt();
        }else{
            imprimirSemEdt();
        }

    }
}

function imprimirComEdt(){
    document.getElementById("lista1").innerHTML="";
    let x = 1;
    for(let i = 0; i<list1.length; i++){
        let item = list1[i];
        let li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" class="list1">${item.nome}</a><button onclick="remover(${i}, ${x})" class="exccont" id="excConteudo" style="height: 3vh;"><img src="img/lixeira.png" style="height: 2.5vh;"></button>`
        document.getElementById("lista1").appendChild(li);
    }
    let y = 2;
    document.getElementById("lista2").innerHTML="";
    for(i = 0; i<list2.length; i++){
        let item = list2[i];
        let li =document.createElement("li");
        li.innerHTML = `<a href="${item.link}" class="list1">${item.nome}</a><button onclick="remover(${i}, ${y})" class="exccont" id="excConteudo" style="height: 3vh;"><img src="img/lixeira.png" style="height: 2.5vh;"></button>`
        document.getElementById("lista2").appendChild(li);
    }
    
    let exccont = [];
    exccont = document.getElementsByClassName("exccont");
    for(let i = 0; i<exccont.length; i++){
                exccont[i].style.display = "flex";
    }
}

function imprimirSemEdt(){
    document.getElementById("lista1").innerHTML="";
    for(let i = 0; i<list1.length; i++){
        let item = list1[i];
        let li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" class="list1">${item.nome}</a>`
        document.getElementById("lista1").appendChild(li);
    }

    document.getElementById("lista2").innerHTML="";
    for(i = 0; i<list2.length; i++){
        let item = list2[i];
        let li =document.createElement("li");
        li.innerHTML = `<a href="${item.link}" class="list1">${item.nome}</a>`
        document.getElementById("lista2").appendChild(li);
    }
}

function entrar(){
    window.location.href = "login.html";
}