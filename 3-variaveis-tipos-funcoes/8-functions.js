function fn() {
  return 'Code here';
}

const arrowFunction = () => 'Code Here';

const arrowFunction2 = () => {
  // Mais de uma expressão
  return 'Code here';
}

// Funções tambem são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn());
console.log(fn.prop);

// receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
  if (allowed) {
    console.log('executou', allowed);
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true) // executara a função fn
handleFnExecution() // não executara a função fn

// controlFnExec coomo função

function controlFnExec2(fnParam) {
  return function(allowed){
    if (allowed) {
      console.log('executou', allowed);
      fnParam();
    } 
  }
}

console.log('---------------------------');
// em uma arrow function, o contexto do this é apontado no momento que ela foi criada
// ja em um função normal o contexto é dada nomomento de sua execução
(() => {
  this.name = 'arrow function';
  const getNameArrowFn = () => this.name;

  function getName() {
    return this.name;
  }

  const user = {
    name: 'Nome do objeto em execução',
    getNameArrowFn,
    getName
  }

  console.log(user.getNameArrowFn());
  console.log(user.getName());
})();