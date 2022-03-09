//pegar o valor digitado
//converter em dolar
//converter em euro
//informar os valores

function Converter() {
    var valorInformado = document.getElementById("valor");
    var valorEmnumero = valorInformado.value;
    var valorEmformatoNumerico = parseFloat(valorEmnumero);
  
    var valorEmdolar = valorEmformatoNumerico / 5.09;
    console.log(valorEmdolar);
    var valorEmeuro = valorEmformatoNumerico / 5.54;
    console.log(valorEmeuro);
  
    //trazendo o resultado da cotação em dolar pro HTML
    var elementoValorconvertidoEmdolar = document.getElementById(
      "valorConvertidoemDolar"
    );
  
    var cotacaoDolar = "Você terá U$ " + valorEmdolar.toFixed(2);
    elementoValorconvertidoEmdolar.innerHTML = cotacaoDolar;
  
    //trazendo agora a cotação do euro (:
    var elementoValorconvertidoEmeuro = document.getElementById(
      "valorConvertidoemEuro"
    );
  
    var cotacaoEmeuro = "Ou se preferir terá " + valorEmeuro.toFixed(2) + "(€)";
    elementoValorconvertidoEmeuro.innerHTML = cotacaoEmeuro;
  }
  