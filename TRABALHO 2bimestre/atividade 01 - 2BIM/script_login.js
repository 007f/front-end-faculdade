function validar(){
    let nome = (document.getElementById('nome_usuario').value).toLowerCase();
    let senha = document.getElementById('senha').value;


    if(nome === "nelson" && senha === "123"){
        window.location.href = "adm.html";
    }else if(nome != "" && senha !=""){
        window.location.href = "usuario.html";
    }else{ 
        alert("credenciais incorretas");
    }
}
