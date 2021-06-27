const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(typeof symbol1, symbol1)

// Symbols são unicos
console.log('symbol1 é igual a symbol2:', symbol2 === symbol2);

// previnir confluto entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1] : 'Murillo',
  [nameSymbol2] : 'Murillo',
  lastName: 'Romeu'
}

console.log(user);

// Symbols criam propriedades que não são enumberables
for (const key in user){
  if (user.hasOwnProperty(key)) {
    console.log(`Valor da chave ${key}: ${user[key]}`);
  }
}

console.log('Proriedades do objeto user:',Object.keys(user));
console.log('Valores das proriedades do objeto user:',Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:',Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user:',Reflect.ownKeys(user)); 

// Criar um enum
const directions = {
  UP: Symbol( 'UP' ),
  DOWN: Symbol( 'DOWN' ),
  LEFT: Symbol( 'LEFT' ),
  RIGHT: Symbol( 'RIGHT' ),
};

console.log(directions);
