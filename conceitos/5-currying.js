//Função soma de forma tra
function tabuadaTraadicional (a, b) {
  console.log(a * b);
}

tabuadaTraadicional(1, 2)
tabuadaTraadicional(1, 3)
tabuadaTraadicional(1, 4)
tabuadaTraadicional(1, 5)
tabuadaTraadicional(1, 6)

// Função tabiada usando o curying, como sempre se vai 
// repetir o primeiro operador ele vai ser passado apenas uma vez
function tabuadaCurying(a) {
  return function(b) {
    console.log(a * b);
  }
}

const tabuada = tabuadaCurying(1);

tabuada(2);
tabuada(3);
tabuada(4);
tabuada(5);
tabuada(6);