// Singleton
// O objetivo desse patterne é criar uma única instância de uma função
// construtora e retorná=la toda vez em que for necessári outilizá-la

function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this;
  }

  return Pessoa.instance;
}

const p = Pessoa.call({name: 'Murillo'});
const p2 = Pessoa.call({name: 'Romeu'});

console.log(p);
console.log(p2);