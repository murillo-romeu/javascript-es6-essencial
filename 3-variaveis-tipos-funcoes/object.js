let user = {
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