///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
function verificarErro(resultado) {
  if (resultado === undefined || resultado > 1000000) {
    return 'ERRO'
  } else {
    return resultado
  }

}


function Calculadora(num1, num2, operador) {
  let resultado
  num1 = Number(num1)
  num2 = Number(num2)

  switch (operador) {
    case '+':
      resultado = num1 + num2
      return verificarErro(resultado);
    case '-':
      resultado = num1 - num2
      return verificarErro(resultado);
    case '/':
      resultado = num1 / num2
      return verificarErro(resultado);
    case '*':
      resultado = num1 * num2
      return verificarErro(resultado);
    case 'e':
      resultado = num1

      if (num2 === 0) {
        resultado = 0
      } else {
        for (let contador = 1; contador != num2; contador ++) {
          resultado *= num1
        }
      }
      
      return verificarErro(resultado);
  }

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}