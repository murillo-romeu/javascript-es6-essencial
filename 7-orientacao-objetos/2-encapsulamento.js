// pode utilizar o set e get para realizar o encapsulamento, quando a delcaração
// utilizada o # ao inves do let
class Person {
  #name = ''

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name.toUpperCase()
  }
}

const pessoa = new Person()

pessoa.name = 'Murillo';

console.log(pessoa.name);