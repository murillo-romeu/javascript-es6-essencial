// Quando atribuo uma variável const com um tipo
// primitivo (string, number, boolean)
// não pode ser alterado o valor
const name = 'Murilo';

// name = 'Murillo';

// Se for um objeto pode ser trocado suas propriedades
const user = {
  name: 'Murilo'
};

user.name = 'Murillo';

// Não podemos atribuir um novo valor a essa variável
// user = {
//   name: 'Murillo'
// }


// se for um array, podemos adicionar, alterar ou remover itens
const persons = ['John', 'Joseph', 'Maik'];
// adicionar
persons.push('Peter');

// não podemos atribuir um novo valor
// const persons = ['Patrick', 'Harry', 'Fox'];