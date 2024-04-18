function calcularTotal(){
    let resut = document.getElementById('resultado');
    let codfio = document.getElementById('codigoFio').value;
    let cor = document.getElementById('corFio').value;
    let preco = document.getElementById('precoMetro').value;
    preco = parseFloat(preco);
    let QT = document.getElementById('quantidadeMetros').value;
    QT = parseFloat(QT);
    let PrTotal = QT * preco;

    resut.innerHTML =   "<h3>Codigo do Fio "+codfio +"</h3>"+
                        "<h3>Cor do Fio "+cor + "</h3>"+
                        "<h3>Preço por Metro (R$): "+preco +" </h3>"+
                        "<h3>Quantidade de Metros: "+QT +" </h3>"+
                        "<h3>Valor total: "+PrTotal+"</h3>";
}
