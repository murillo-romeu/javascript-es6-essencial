let arr = [3, 5, 7];
arr.foo = 'bar';

//  i recebe o indice
for (let i in arr ) {
  console.log(i);
}

console.log('--------');

// recebe o conteudo - so para propriedades numeradas
for (let i of arr) {
  console.log(i);
}