function validar(){
    let nome = document.getElementById('NomeCli').value;
    let fone = document.getElementById('telefone').value;
    let ende = document.getElementById('endereco').value;
    let prefe = document.getElementById('preferencia').value;
    let qt = document.getElementById('quantidade').value;
    let abast = document.getElementById('abastecer').value;

    alert('Nome: '+nome +'\nTelefone: '+fone+ '\nEndereço: '+ende+ '\nPreferencia: '+prefe+ '\nQuantidade: '+qt+ '\nDeseja abastecer?: '+abast);
}
