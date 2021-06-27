// A declaração da função é elevada para o topo do escopo
// como um todo, a função e seu conteúdo, podendo ser executada
// antes da sua criação
fn();

function fn() {
  function log(value) {
    console.log(value);
  }

  log('Hoisting de função.')
}