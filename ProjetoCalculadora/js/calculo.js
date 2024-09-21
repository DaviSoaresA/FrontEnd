document
.getElementById("calcular")
.addEventListener("click", function () {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operacao = document.querySelector(
    'input[name="operacao"]:checked'
  );

  if (isNaN(num1) || isNaN(num2)) {
    alert("Valores inválidos");
    return;
  }
  if (operacao === null) {
    alert("Escolha uma operação!");
    return;
  }
  var res;
  switch (operacao.value) {
    case "Soma":
      res = num1 + num2;
      break;
    case "Subtracao":
      res = num1 - num2;
      break;
    case "Multiplicacao":
      res = num1 * num2;
      break;
    case "Divisao":
      res = num1 / num2;
      break;
    default:
      break;
  }

  document.getElementById("res").innerText = "Resultado: " + res;
});