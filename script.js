function escolherFilme(filme) {

    document.getElementById("nomeFilme").innerHTML = filme;

    document.getElementById("inicio").style.display = "none";

    document.getElementById("ingressos").style.display = "block";
}


function irParaIngressos() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("ingressos").style.display = "block";
}


function voltarInicio() {

    document.getElementById("ingressos").style.display = "none";

    document.getElementById("inicio").style.display = "block";
}


function calcular() {

    let estoqueMeia = 80;
    let estoqueInteira = 100;
    let estoqueVIP = 20;

    let precoMeia = 15;
    let precoInteira = 30;
    let precoVIP = 50;


    let meia = Number(document.getElementById("meia").value);

    let inteira = Number(document.getElementById("inteira").value);

    let vip = Number(document.getElementById("vip").value);


    if (
        meia > estoqueMeia ||
        inteira > estoqueInteira ||
        vip > estoqueVIP
    ) {

        document.getElementById("resultado").innerHTML =
            "Quantidade maior que o estoque disponível.";

        return;
    }


    let totalMeia = meia * precoMeia;

    let totalInteira = inteira * precoInteira;

    let totalVIP = vip * precoVIP;


    let faturamento =
        totalMeia +
        totalInteira +
        totalVIP;


    let totalIngressos =
        meia +
        inteira +
        vip;


    let sobra =
        (estoqueMeia - meia) +
        (estoqueInteira - inteira) +
        (estoqueVIP - vip);


    let media = 0;


    if (totalIngressos > 0) {

        media = faturamento / totalIngressos;

    }


    document.getElementById("resultado").innerHTML =

        "<strong>Compra realizada!</strong><br><br>" +

        "Ingressos vendidos: " +
        totalIngressos +
        "<br>" +

        "Ingressos restantes: " +
        sobra +
        "<br>" +

        "Faturamento: R$ " +
        faturamento.toFixed(2) +
        "<br>" +

        "Média por ingresso: R$ " +
        media.toFixed(2);
}