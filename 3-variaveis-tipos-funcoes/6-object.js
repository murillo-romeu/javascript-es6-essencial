const user = {
  name: 'Murilo'
};
console.log('Declaração do objeto: ', user);

// alterando a propriedade de um objeto
user.name = 'Murilllo';
console.log('Alteração do objeto . : ', user);
user['name'] = 'Murillo';
console.log('Alteração do objeto [] : ', user);
// criando uma propriedade
user.lastName = 'Romeu';
console.log('Criando uma propriedade no objeto: ', user);

// deletando uma propriedade
delete user.name;
console.log('Removendo uma propriedade no objeto: ', user);

user.name = 'Murillo'

// recupera as chaves do objeto
console.log('Propriedades do objeto user: ',Object.keys(user));

// recupera os valores das chaves do opjeto
console.log('Valores das propriedades do objeto user: ',Object.values(user));

// retorna um arrays de arrays contendo [nome_prop, valor_prop]
console.log('Lista de propriedades e valores: ',Object.entries(user));

// mergear propriedades de objetos
Object.assign(user, {fullName: 'Murillo Romeu'});
console.log('Adiciona a propridade fullName no objeto user:', user);
console.log('Retorna um novo objeto mergeando dois ou mais objetos:',Object.assign({}, user, {age: 34}));
// imutabilidade do objeto
console.log('O objeto user não foi alterado:', user);

// previne todas as alteraçẽs em um objeto:
const newObject = { foo: 'bar'};
Object.freeze(newObject);

newObject.foo = 'changes';
console.log(newObject);

delete newObject.foo;
console.log(newObject);

// permite apenas a alteração de propriedades existente em um objeto
const person = { name: 'Murillo' };
Object.seal(person);

person.name = 'Murillo Romeu';
delete person.name;
person.age = 34;

console.log('Variavel person após as alterações:', person);
