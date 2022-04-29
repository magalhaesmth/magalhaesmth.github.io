function imprimir(){
  var divReciboTudo = document.getElementById("container").style.display = "none";
  var divReciboImprimido = document.getElementById("reciboImprimir").style.display = "block";
  getDados();
}
function voltar(){
  var divReciboTudo = document.getElementById("container").style.display = "block";
  var divReciboImprimido = document.getElementById("reciboImprimir").style.display = "none";
}

function getDados(){
  var valor = document.getElementById("valorInput");
  var empregado = document.getElementById("empregadoInput");
  var aTitulo = document.getElementById("aTituloInput");
  var empregador = document.getElementById("empregadorInput");
  var cpfCnpj = document.getElementById("cpfCNPJInput");
  var cidade = document.getElementById("cidadeInput");
  var data = document.getElementById("dataInput");
  var formasPagamento = document.getElementsByClassName("radio");
  var remuneracaoMensal = document.getElementById("remuneracaoMensalInput");

  document.getElementById("texto2").innerHTML = `Eu, ${empregadoInput.value} declaro para todos os efeitos, ter recebido a título de ${aTituloInput.value}, a importância de: R$${valorInput.value},00 reais, e em concordância com o disposto no Art. 462, da CLT, tenho plena consciência de que o respectivo valor será descontado, pelo empregador: ${empregadorInput.value}, de CPF/CNPJ Nº ${cpfCNPJInput.value}, do pagamento da minha remuneração mensal relativa à folha do mês de ${remuneracaoMensalInput.value}.`;
  document.getElementById("valorPago").innerHTML = `R$ ${valorInput.value},00 #`;
  document.getElementById("dataImpressao").innerHTML = `${cidadeInput.value}  -  ${dataInput.value}`;
}
