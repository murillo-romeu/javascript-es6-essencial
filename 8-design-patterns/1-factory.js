// Factory
// todas as funções que retornam um objeto, sem a necessidade de chamá-los com
// a new, são considerados funções Factory.
function Pessoa() {
  return {
    name: 'Murillo',
    lastName: 'Romeu'
  }
}