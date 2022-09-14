function verificarEsPrimo(numero) {
  var esPrimo = true;

  if (numero <= 1) {
    esPrimo = false;
    return esPrimo;
  }

  for (var i = 2; i <= numero - 1; i++) {
    if (numero % i == 0) {
      esPrimo = false;
      return esPrimo;
    }
  }

  return esPrimo;
}

function verificar() {
  var numero = document.getElementById("txtNumero").value;
  const PI = 3.14;
  var resultado = 0.0;

  if (!numero == "") {
    if(isNaN(numero)){
      alert("!!!..Ingrese un valor numerico valido..!!!.");
      return;
    }
    var esPrimo = verificarEsPrimo(parseInt(numero));
    if (esPrimo) {
      resultado = numero * PI;
      alert("!!!..Es un numero primo..!!!.<br>Se procede a Multiplicar por la constante PI: 3.14.<br>Resultado: "+resultado);
    } else {
      alert("!!!..No es un numero primo..!!!.");
    }
  } else {
    alert("!!!..El campo está vacio.!!!.");
  }
}
