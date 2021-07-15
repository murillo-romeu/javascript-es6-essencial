const arr = ['pera', 'uva', 'maça', 'mamão', 'goiaba']

arr.forEach((value, index) => {
  console.log(`${index}: ${value}`);
})

const retFrutas = arr.map((fruta, index)=> `${index} - ${fruta}`) 
console.log(retFrutas);

// elemina os niveis do array
const numbers = [[1, 2], [3, 4, [5, 6]]]
console.log(numbers.flat(1));
console.log(numbers.flat(2));

const arrInterator = arr.keys();
