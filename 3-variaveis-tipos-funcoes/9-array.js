const users = ['Murillo', 'Marisa', 'Romeu'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Murillo',
    age: 32,
    gender: gender.MAN
  },
  {
    name: 'Marisa',
    age: 55,
    gender: gender.WOMAN
  },
  {
    name: 'Romeu',
    age: 70,
    gender: gender.MAN
  }
];

// retornar a quantidade de items de um array
console.log('Total de items:',persons.length);

// verificar se é um array
console.log('A variavel persons é um array?', Array.isArray(persons));

// iterar os itens do array
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name}`,`index: ${index}`,`array: ${arr}`)
})

persons.forEach(person => {
  console.log(`Nome: ${person.name}`)
})

// filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log("Nova lista apenas com homens:", mens);

// retorna um novo campo
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript';
  return person;
})

console.log('Pessoas com o curso', personsWithCourse);

// transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0)

console.log('Soma de todas as idades', totalAge);

// utilizando mais de uma operação
const totalWomanAges = persons
                          .filter(person => person.gender === gender.WOMAN)
                          .reduce((age, person) => {
                            age += person.age;
                            return age;
                          },0)

console.log('Idade total das mulheres:', totalWomanAges);