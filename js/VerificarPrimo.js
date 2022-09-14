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

  if (!numero == "") {
    var esPrimo = verificarEsPrimo(parseInt(numero));
    if (esPrimo) {
      alert("!!!..Es un numero primo..!!!.");
    } else {
      alert("!!!..No es un numero primo..!!!.");
    }
  } else {
    alert("!!!..El campo está vacio.!!!.");
  }
}
