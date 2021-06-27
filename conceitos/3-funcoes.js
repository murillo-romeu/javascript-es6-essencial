//
function getName() {
  return 'Murillo Torres Martins Romeu';
}

function logFn(fn){
  console.log(fn());
}

// Atribuir função a uma variável
const logFnResult = logFn;

// Função pode ser passada por argumento
logFnResult(getName)