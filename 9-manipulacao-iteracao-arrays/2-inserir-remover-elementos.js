const frutas  = ['melancia', 'banana']
console.log('adiciona item no final do array');
const tamanho = frutas.push('laranja') 

console.log(frutas, tamanho);

console.log('remove o ultimo item do array');
const removedItem = frutas.pop() 

console.log(frutas, removedItem);

console.log('adiciona item no inicio do array');
const tamanho2 = frutas.unshift('laranja') 
console.log(frutas, tamanho2);

console.log('remove o primeiro item do array');
const removedItem2 = frutas.shift() 

console.log(frutas, removedItem2);

const verduras = ['cenoura', 'batata', 'abobora'];

console.log('concatenar arrays');
const produtos = frutas.concat(verduras);
console.log(produtos);

console.log('fatiamento do array com posição inicio e fim');
const arr = [1, 2, 3, 4, 5]

console.log(arr.slice(0, 1));
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(-3));

console.log('alterar array passando posições e a alteração');
arr.splice(2)
console.log(arr);
arr.splice(0, 0, 'first')
console.log(arr);

